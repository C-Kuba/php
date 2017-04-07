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
var element_service_1 = require("./element.service");
var meshelement_service_1 = require("../meshelement/meshelement.service");
var meshelement_component_1 = require("../meshelement/meshelement.component");
var moment_component_1 = require("../moment/moment.component");
var ElementComponent = (function () {
    function ElementComponent(elementService) {
        this.elementService = elementService;
        this.but = '';
        this.element = 0;
    }
    ElementComponent.prototype.getElements = function () {
        var _this = this;
        this.elementService.getElements()
            .subscribe(function (elements) { _this.elements = elements; }, function (error) { return console.log('onError: %s', error); });
    };
    ElementComponent.prototype.setCheckbox = function () {
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
    };
    ElementComponent.prototype.getMeshElem = function (elem) {
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
    };
    ElementComponent.prototype.ngOnInit = function () {
        this.getElements();
    };
    ElementComponent.prototype.buttonReset = function () {
        this.element = 0;
        if (typeof this.but === 'undefined') {
            return;
        }
        else {
            $(this.but).button('toggle');
            this.but = '';
        }
    };
    return ElementComponent;
}());
__decorate([
    core_1.ViewChild(meshelement_component_1.MeshElementComponent),
    __metadata("design:type", meshelement_component_1.MeshElementComponent)
], ElementComponent.prototype, "meshElementComponent", void 0);
__decorate([
    core_1.ViewChild(moment_component_1.MomentComponent),
    __metadata("design:type", moment_component_1.MomentComponent)
], ElementComponent.prototype, "momentComponent", void 0);
ElementComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/element/element.component.html',
        providers: [element_service_1.ElementService, meshelement_service_1.MeshElementService, meshelement_component_1.MeshElementComponent, moment_component_1.MomentComponent]
    }),
    __metadata("design:paramtypes", [element_service_1.ElementService])
], ElementComponent);
exports.ElementComponent = ElementComponent;
//# sourceMappingURL=element.component.js.map