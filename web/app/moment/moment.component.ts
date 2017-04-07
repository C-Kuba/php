import {Component, OnInit} from '@angular/core'
import {MeshElement} from '../meshelement/meshelement'
import {MeshElementService} from '../meshelement/meshelement.service'
import {MeshElementComponent} from '../meshelement/meshelement.component'
import {MaterialComponent} from '../material/material.component'

@Component({
    selector: 'moment-app',
    templateUrl: './app/moment/moment.component.html',
    providers: [MeshElementService]
})

export class MomentComponent{

    element: number;
    flaga: number;
    but: string;

    constructor(private meshElementService: MeshElementService, private meshElementComponent: MeshElementComponent){
        this.element = 0;
        this.flaga = 0;
        this.but = '';
    }
    
    setMxxTopMoments(){
        if(this.element == 0){
            return;
        }

        if($('#checkMeOut').prop('checked')){
            this.flaga = 1;
            this.getMeshElem();
            this.buttonToggle();
        }
        else{
            this.flaga = 1;
            this.getMeshElem();
            this.buttonToggle();
        }
    }
    
    setMxxBottomMoments(){
        if(this.element == 0){
            return;
        }

        if($('#checkMeOut').prop('checked')){
            this.flaga = 2;
            this.getMeshElem();
            this.buttonToggle();
        }
        else{
            this.flaga = 2;
            this.getMeshElem();
            this.buttonToggle();
        }
    }
    
    setMyyTopMoments(){
        if(this.element == 0){
            return;
        }

        if($('#checkMeOut').prop('checked')){
            this.flaga = 3;
            this.getMeshElem();
            this.buttonToggle();
        }
        else {
            this.flaga = 3;
            this.getMeshElem();
            this.buttonToggle();
        }
    }
    
    setMyyBottomMoments(){
        if(this.element == 0){
            return;
        }

        if($('#checkMeOut').prop('checked')){
            this.flaga = 4;
            this.getMeshElem();
            this.buttonToggle();
        }
        else{
            this.flaga = 4;
            this.getMeshElem();
            this.buttonToggle();
        }
    }

    getMeshElem(){
        this.meshElementService.getMeshElement(this.element)
            .subscribe(
                meshels => this.setColors(meshels)
            );
    }
    
    buttonReset(){
        if(typeof this.but === 'undefined'){
           return
        }
        else{
            $(this.but).button('toggle');
            this.but = '';
            this.element = 0;
        }
    }

    buttonToggle(){
        if(typeof this.but === 'undefined'){
            this.but = '#option' + this.flaga;
            $(this.but).button('toggle');
        }
        else{
            $(this.but).button('toggle');
            this.but = '#option' + this.flaga;
            $(this.but).button('toggle');
        }
    }

    setColors(meshelements){
        let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        var moment = '';
        
        switch(this.flaga){
            case 0: moment = ''; break;
            case 1: moment = 'mxxTop'; break;
            case 2: moment = 'mxxBottom'; break;
            case 3: moment = 'myyTop'; break;
            case 4: moment = 'myyBottom'; break;
            default: moment = '';
        }

        var corners = this.meshElementComponent.getCorners(meshelements);
        
        if(moment != ''){
            var mmtArray = new Array();

            meshelements.forEach(
                values => mmtArray.push(
                    values['0']['momentmoment'][moment]
                ));

            var minMoment = Math.min.apply(Math, mmtArray);
            var maxMoment = Math.max.apply(Math, mmtArray);

            console.log(maxMoment);


            if($('#checkMeOut').prop('checked')) {

                var material = new MaterialComponent();

                var as1_array = material.getAs(mmtArray);

                console.log(as1_array);

                var min_as = Math.min.apply(Math, as1_array);
                var max_as = Math.max.apply(Math, as1_array);

                this.Polygon(context, corners, max_as, as1_array);
            }
            else{
                if(moment == 'mxxBottom' || moment == 'myyBottom')
                    maxMoment = minMoment;

                this.Polygon(context, corners, maxMoment, mmtArray);
            }
        }
        else{
            this.Polygon(context, corners);
        }
    }

    setElement(element){
        this.element = element;
        this.getMeshElem();
        this.flaga = 0;
    }

    sColors(curResult: number, maxResults: number): any{
        var Colors = [0, 0, 0];
        var value;
        var string = '';
        if(curResult == 0) curResult = 1;
        if(curResult<0) curResult = -curResult;
        if(maxResults<0) maxResults = -maxResults;

        var halfMax = maxResults/2;

        if(curResult > halfMax){
            value = Math.ceil((curResult/halfMax - 1) * 128);
            Colors[0] = 255;
            Colors[1] = value;
            Colors[2] = value;
            string = 'rgb(' + Colors[0].toString() + ', ' + Colors[1].toString() + ', ' + Colors[2].toString() + ')';
        }
        else{
            value = Math.ceil((1 - curResult/halfMax) * 255);
            Colors[0] = value;
            Colors[1] = 255;
            Colors[2] = 255;
            string = 'rgb(' + Colors[0].toString() + ', ' + Colors[1].toString() + ', ' + Colors[2].toString() + ')';
        }
        return string;
    }

    Polygon(context, pointsArray, maxResult?, momentsArray?) {
        if (pointsArray.length <= 0) return;

        // console.log(this.sColors(momentsArray[0], maxResult));

        var cos = this;

        if(typeof maxResult !== 'undefined'){
            pointsArray.forEach(function (value, key) {
                var height = value[2].xx - value[0].xx;
                var width = value[2].yy - value[0].yy;

                // context.fillStyle = this.sColors(momentsArray[key], maxResult);
                // context.strokeRect(value[0].yy, value[0].xx, height, width);
                // context.fill();

                value.forEach(function (val, k) {
                    context.strokeRect(val.xx + 3,val.yy + 3, height, width);
                    context.fillStyle = cos.sColors(momentsArray[key], maxResult);
                    context.fillRect(val.xx + 3,val.yy + 3, height, width);
                    context.lineWidth = 2;
                    context.stroke();
                    context.fill();
                });
            });
        }
        else{
            pointsArray.forEach(function (value, key) {
                var height = value[2].xx - value[0].xx;
                var width = value[2].yy - value[0].yy;

                value.forEach(function (val, k) {
                    context.fillStyle = '#FFF';
                    context.strokeRect(val.xx + 3,val.yy + 3, height, width);
                    context.fillRect(val.xx + 3,val.yy + 3, height, width);
                    context.lineWidth = 2;
                    context.stroke();
                    context.fill();
                });//
            });
        }

        // for (var i = 0; i < pointsArray.length; i++) {
        //     c.lineTo(pointsArray[i][0], pointsArray[i][1]);
        // }

        // context.strokeStyle = '#000';
        // context.fillStyle = '#FFF';
        // context.lineWidth = 0.5;
        // context.stroke();

        // if (strokeColor != null && strokeColor != undefined)
        //     c.strokeStyle = strokeColor;
        //
        // if (fillColor != null && fillColor != undefined) {
        //     c.fillStyle = fillColor;
        //     c.fill();
        // }
    }
}
declare var $: any;