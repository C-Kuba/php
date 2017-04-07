import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {MeshElement} from './meshelement'
import {MeshElementService} from './meshelement.service'
import {Corners} from './corners'


@Component({
    selector: 'mesh-app',
    templateUrl: './app/meshelement/meshelement.component.html',
    providers: [MeshElementService]
})

export class MeshElementComponent implements OnInit{
    
    meshelements: Array<MeshElement>;

    @Output() myEvent = new EventEmitter();
    
    constructor(private meshElementService: MeshElementService){
    }

    getMesh(element? :number){
        let elem = (element) ? element: 0;
        this.meshElementService.getMeshElement(elem)
            .subscribe(
                mesh => {this.meshelements = mesh},
                error => console.log('onError: %s', error)
            );
    }

    // onDrow(element? :number){
    //     let elem = (element) ? element: 0;
    //     this.meshElementService.getMeshElement(elem)
    //        .subscribe(
    //             res => this.drowMesh(res)
    //         );
    // }

    getCorners(meshelements: Array<MeshElement>):any{
        let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        var x_array = new Array();
        var y_array = new Array();

        meshelements.forEach(
            values => x_array.push(
                values["0"].nodesNode.x,
                values["0"].nodesNode1.x,
                values["0"].nodesNode2.x,
                values["0"].nodesNode3.x
            ));
        meshelements.forEach(
            values => y_array.push(
                values["0"].nodesNode.y,
                values["0"].nodesNode1.y,
                values["0"].nodesNode2.y,
                values["0"].nodesNode3.y
            ));

        var min_x = Math.min.apply(Math, x_array);
        var min_y = Math.min.apply(Math, y_array);
        var max_x = Math.max.apply(Math, x_array);
        var max_y = Math.max.apply(Math, y_array);

        var dx = max_x - min_x;
        var dy = max_y - min_y;

        var ScaleX = (canvas.scrollWidth)/dx;
        var ScaleY = (canvas.scrollHeight)/dy;
        var scale = Math.min(ScaleX, ScaleY);

        let corners = new Array(meshelements.length);

        for(var i=0; i<meshelements.length; i++)
            corners[i] = new Array();

        meshelements.forEach(function (value, key) {
            var nNode;

            for(var inode = 0; inode < 4; inode++)
            {
                if(inode != 0) nNode = inode;
                else nNode = '';

                let x = (value['0']['nodesNode' + nNode].x) * scale;
                let y = (value['0']['nodesNode' + nNode].y) * scale;
                corners[key][inode] = new Corners(x, y);
            }
        });

        return corners;
    }

    clearContext(){
        let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    clear(){
        let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        this.myEvent.emit(null);
    }

    ngOnInit(){
       // this.clear();
    }
}
declare var $: any;