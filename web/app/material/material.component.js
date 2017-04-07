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
var app_1 = require("./app/app");
var concrete_1 = require("./app/concrete");
var MaterialComponent = (function () {
    function MaterialComponent() {
        var concrete = new concrete_1.Concrete();
        this.data = concrete.getData();
    }
    MaterialComponent.prototype.save = function () {
        this.data.fck = parseFloat($('#steelfck').val());
        this.data.fyk = parseFloat($('#steelfyk').val());
        this.data.th = parseFloat($('#thickness').val());
        this.data.cmin_dur = parseFloat($('#otulina').val());
        this.data.fi = parseFloat($('#sr_preta').val());
        $('#exampleModal').modal('toggle');
    };
    MaterialComponent.prototype.getAs = function (moments) {
        var app = new app_1.App();
        var steel = app.getSteelConcreteData(this.data.fck, this.data.fyk);
        var cnom = app.getOtulina(this.data.fi, this.data.cmin_dur);
        var d = app.get_d(this.data.th, this.data.fi, cnom);
        var as_array = app.getReinforcement(moments, steel, d);
        return as_array;
    };
    return MaterialComponent;
}());
MaterialComponent = __decorate([
    core_1.Component({
        selector: 'material',
        templateUrl: './app/material/material.component.html'
    }),
    __metadata("design:paramtypes", [])
], MaterialComponent);
exports.MaterialComponent = MaterialComponent;
//# sourceMappingURL=material.component.js.map