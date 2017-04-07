"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var meshelement_service_1 = require("../meshelement/meshelement.service");
var meshelement_component_1 = require("../meshelement/meshelement.component");
var material_component_1 = require("../material/material.component");
var MomentComponent = (function () {
    function MomentComponent(meshElementService, meshElementComponent) {
        this.meshElementService = meshElementService;
        this.meshElementComponent = meshElementComponent;
        this.element = 0;
        this.flaga = 0;
        this.but = '';
    }
    MomentComponent.prototype.setMxxTopMoments = function () {
        if (this.element == 0) {
            return;
        }
        if ($('#checkMeOut').prop('checked')) {
            this.flaga = 1;
            this.getMeshElem();
            this.buttonToggle();
        }
        else {
            this.flaga = 1;
            this.getMeshElem();
            this.buttonToggle();
        }
    };
    MomentComponent.prototype.setMxxBottomMoments = function () {
        if (this.element == 0) {
            return;
        }
        if ($('#checkMeOut').prop('checked')) {
            this.flaga = 2;
            this.getMeshElem();
            this.buttonToggle();
        }
        else {
            this.flaga = 2;
            this.getMeshElem();
            this.buttonToggle();
        }
    };
    MomentComponent.prototype.setMyyTopMoments = function () {
        if (this.element == 0) {
            return;
        }
        if ($('#checkMeOut').prop('checked')) {
            this.flaga = 3;
            this.getMeshElem();
            this.buttonToggle();
        }
        else {
            this.flaga = 3;
            this.getMeshElem();
            this.buttonToggle();
        }
    };
    MomentComponent.prototype.setMyyBottomMoments = function () {
        if (this.element == 0) {
            return;
        }
        if ($('#checkMeOut').prop('checked')) {
            this.flaga = 4;
            this.getMeshElem();
            this.buttonToggle();
        }
        else {
            this.flaga = 4;
            this.getMeshElem();
            this.buttonToggle();
        }
    };
    MomentComponent.prototype.getMeshElem = function () {
        var _this = this;
        this.meshElementService.getMeshElement(this.element)
            .subscribe(function (meshels) { return _this.setColors(meshels); });
    };
    MomentComponent.prototype.buttonReset = function () {
        if (typeof this.but === 'undefined') {
            return;
        }
        else {
            $(this.but).button('toggle');
            this.but = '';
            this.element = 0;
        }
    };
    MomentComponent.prototype.buttonToggle = function () {
        if (typeof this.but === 'undefined') {
            this.but = '#option' + this.flaga;
            $(this.but).button('toggle');
        }
        else {
            $(this.but).button('toggle');
            this.but = '#option' + this.flaga;
            $(this.but).button('toggle');
        }
    };
    MomentComponent.prototype.setColors = function (meshelements) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var moment = '';
        switch (this.flaga) {
            case 0:
                moment = '';
                break;
            case 1:
                moment = 'mxxTop';
                break;
            case 2:
                moment = 'mxxBottom';
                break;
            case 3:
                moment = 'myyTop';
                break;
            case 4:
                moment = 'myyBottom';
                break;
            default: moment = '';
        }
        var corners = this.meshElementComponent.getCorners(meshelements);
        if (moment != '') {
            var mmtArray = new Array();
            meshelements.forEach(function (values) { return mmtArray.push(values['0']['momentmoment'][moment]); });
            var minMoment = Math.min.apply(Math, mmtArray);
            var maxMoment = Math.max.apply(Math, mmtArray);
            console.log(maxMoment);
            if ($('#checkMeOut').prop('checked')) {
                var material = new material_component_1.MaterialComponent();
                var as1_array = material.getAs(mmtArray);
                console.log(as1_array);
                var min_as = Math.min.apply(Math, as1_array);
                var max_as = Math.max.apply(Math, as1_array);
                this.Polygon(context, corners, max_as, as1_array);
            }
            else {
                if (moment == 'mxxBottom' || moment == 'myyBottom')
                    maxMoment = minMoment;
                this.Polygon(context, corners, maxMoment, mmtArray);
            }
        }
        else {
            this.Polygon(context, corners);
        }
    };
    MomentComponent.prototype.setElement = function (element) {
        this.element = element;
        this.getMeshElem();
        this.flaga = 0;
    };
    MomentComponent.prototype.sColors = function (curResult, maxResults) {
        var Colors = [0, 0, 0];
        var value;
        var string = '';
        if (curResult == 0)
            curResult = 1;
        if (curResult < 0)
            curResult = -curResult;
        if (maxResults < 0)
            maxResults = -maxResults;
        var halfMax = maxResults / 2;
        if (curResult > halfMax) {
            value = Math.ceil((curResult / halfMax - 1) * 128);
            Colors[0] = 255;
            Colors[1] = value;
            Colors[2] = value;
            string = 'rgb(' + Colors[0].toString() + ', ' + Colors[1].toString() + ', ' + Colors[2].toString() + ')';
        }
        else {
            value = Math.ceil((1 - curResult / halfMax) * 255);
            Colors[0] = value;
            Colors[1] = 255;
            Colors[2] = 255;
            string = 'rgb(' + Colors[0].toString() + ', ' + Colors[1].toString() + ', ' + Colors[2].toString() + ')';
        }
        return string;
    };
    MomentComponent.prototype.Polygon = function (context, pointsArray, maxResult, momentsArray) {
        if (pointsArray.length <= 0)
            return;
        // console.log(this.sColors(momentsArray[0], maxResult));
        var cos = this;
        if (typeof maxResult !== 'undefined') {
            pointsArray.forEach(function (value, key) {
                var height = value[2].xx - value[0].xx;
                var width = value[2].yy - value[0].yy;
                // context.fillStyle = this.sColors(momentsArray[key], maxResult);
                // context.strokeRect(value[0].yy, value[0].xx, height, width);
                // context.fill();
                value.forEach(function (val, k) {
                    context.strokeRect(val.xx + 3, val.yy + 3, height, width);
                    context.fillStyle = cos.sColors(momentsArray[key], maxResult);
                    context.fillRect(val.xx + 3, val.yy + 3, height, width);
                    context.lineWidth = 2;
                    context.stroke();
                    context.fill();
                });
            });
        }
        else {
            pointsArray.forEach(function (value, key) {
                var height = value[2].xx - value[0].xx;
                var width = value[2].yy - value[0].yy;
                value.forEach(function (val, k) {
                    context.fillStyle = '#FFF';
                    context.strokeRect(val.xx + 3, val.yy + 3, height, width);
                    context.fillRect(val.xx + 3, val.yy + 3, height, width);
                    context.lineWidth = 2;
                    context.stroke();
                    context.fill();
                }); //
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
    };
    return MomentComponent;
}());
MomentComponent = __decorate([
    core_1.Component({
        selector: 'moment-app',
        templateUrl: './app/moment/moment.component.html',
        providers: [meshelement_service_1.MeshElementService]
    }),
    __metadata("design:paramtypes", [meshelement_service_1.MeshElementService, meshelement_component_1.MeshElementComponent])
], MomentComponent);
exports.MomentComponent = MomentComponent;
//# sourceMappingURL=moment.component.js.map