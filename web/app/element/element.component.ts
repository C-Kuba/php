import {Component, ViewChild, OnInit} from '@angular/core'
import {Element} from './element'
import {ElementService} from './element.service'
import {MeshElementService} from "../meshelement/meshelement.service"
import {MeshElementComponent} from '../meshelement/meshelement.component'
import {MomentComponent} from '../moment/moment.component'


@Component({
    selector: 'my-app',
    templateUrl: './app/element/element.component.html',
    providers: [ElementService, MeshElementService, MeshElementComponent, MomentComponent]
})

export class ElementComponent implements OnInit{

    @ViewChild(MeshElementComponent) meshElementComponent: MeshElementComponent;
    @ViewChild(MomentComponent) momentComponent: MomentComponent;
    
    elements: Array<Element>;
    but: string;
    element: number;
    
    constructor(private elementService: ElementService){
        this.but = '';
        this.element = 0;
    }
    
    getElements(){
        this.elementService.getElements()
            .subscribe(
                elements => {this.elements = elements},
                error => console.log('onError: %s', error)
            );
    }

    setCheckbox(){
        // if($('#checkMeOut').prop('checked')){
        //     this.momentComponent.setElement(this.element);
        //     this.momentComponent.buttonReset();
        // }
        // else {
        //     this.momentComponent.setElement(this.element);
        //     this.momentComponent.buttonReset();
        // }
        this.momentComponent.setElement(this.element);
        this.momentComponent.buttonToggle();
    }

    getMeshElem(elem: number){
        this.element = elem;
        
        this.momentComponent.buttonReset();

        if (typeof this.but === 'undefined') {
            this.but = '#cos' + elem;
            $(this.but).button('toggle');
        } 
        else {
            $(this.but).button('toggle');
            this.but = '#cos' + elem;
            $(this.but).button('toggle');
        }
            
        //this.meshElementComponent.onDrow(elem);
        this.meshElementComponent.clearContext();
        this.momentComponent.setElement(this.element);
    }
    
    ngOnInit(){
        this.getElements();
    }

    buttonReset(){
        this.element = 0;

        if(typeof this.but === 'undefined'){
            return
        }
        else{
            $(this.but).button('toggle');
            this.but = '';
        }
    }

}
declare var $: any;