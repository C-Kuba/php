import {Component} from '@angular/core'
import {App} from './app/app'
import {Concrete} from './app/concrete'

@Component({
    selector: 'material',
    templateUrl: './app/material/material.component.html'
})

export class MaterialComponent {

    data: any;

    constructor(){
        var concrete = new Concrete();
        this.data = concrete.getData();
    }

    save(){
        this.data.fck = parseFloat($('#steelfck').val());
        this.data.fyk = parseFloat($('#steelfyk').val());
        this.data.th = parseFloat($('#thickness').val());
        this.data.cmin_dur = parseFloat($('#otulina').val());
        this.data.fi = parseFloat($('#sr_preta').val());

        $('#exampleModal').modal('toggle');
    }
    
    getAs(moments):Array<any>{
        var app = new App();
        
        var steel = app.getSteelConcreteData(this.data.fck, this.data.fyk);
        var cnom = app.getOtulina(this.data.fi, this.data.cmin_dur);
        var d = app.get_d(this.data.th, this.data.fi, cnom);
        var as_array = app.getReinforcement(moments, steel, d);
        
        return as_array;
    }

}
declare var $: any;