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
var meshelement_service_1 = require("./meshelement.service");
var corners_1 = require("./corners");
var MeshElementComponent = (function () {
    function MeshElementComponent(meshElementService) {
        this.meshElementService = meshElementService;
        this.myEvent = new core_1.EventEmitter();
    }
    MeshElementComponent.prototype.getMesh = function (element) {
        var _this = this;
        var elem = (element) ? element : 0;
        this.meshElementService.getMeshElement(elem)
            .subscribe(function (mesh) { _this.meshelements = mesh; }, function (error) { return console.log('onError: %s', error); });
    };
    // onDrow(element? :number){
    //     let elem = (element) ? element: 0;
    //     this.meshElementService.getMeshElement(elem)
    //        .subscribe(
    //             res => this.drowMesh(res)
    //         );
    // }
    MeshElementComponent.prototype.getCorners = function (meshelements) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var x_array = new Array();
        var y_array = new Array();
        meshelements.forEach(function (values) { return x_array.push(values["0"].nodesNode.x, values["0"].nodesNode1.x, values["0"].nodesNode2.x, values["0"].nodesNode3.x); });
        meshelements.forEach(function (values) { return y_array.push(values["0"].nodesNode.y, values["0"].nodesNode1.y, values["0"].nodesNode2.y, values["0"].nodesNode3.y); });
        var min_x = Math.min.apply(Math, x_array);
        var min_y = Math.min.apply(Math, y_array);
        var max_x = Math.max.apply(Math, x_array);
        var max_y = Math.max.apply(Math, y_array);
        var dx = max_x - min_x;
        var dy = max_y - min_y;
        var ScaleX = (canvas.scrollWidth) / dx;
        var ScaleY = (canvas.scrollHeight) / dy;
        var scale = Math.min(ScaleX, ScaleY);
        var corners = new Array(meshelements.length);
        for (var i = 0; i < meshelements.length; i++)
            corners[i] = new Array();
        meshelements.forEach(function (value, key) {
            var nNode;
            for (var inode = 0; inode < 4; inode++) {
                if (inode != 0)
                    nNode = inode;
                else
                    nNode = '';
                var x = (value['0']['nodesNode' + nNode].x) * scale;
                var y = (value['0']['nodesNode' + nNode].y) * scale;
                corners[key][inode] = new corners_1.Corners(x, y);
            }
        });
        return corners;
    };
    MeshElementComponent.prototype.clearContext = function () {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
    MeshElementComponent.prototype.clear = function () {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.myEvent.emit(null);
    };
    MeshElementComponent.prototype.ngOnInit = function () {
        // this.clear();
    };
    return MeshElementComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MeshElementComponent.prototype, "myEvent", void 0);
MeshElementComponent = __decorate([
    core_1.Component({
        selector: 'mesh-app',
        templateUrl: './app/meshelement/meshelement.component.html',
        providers: [meshelement_service_1.MeshElementService]
    }),
    __metadata("design:paramtypes", [meshelement_service_1.MeshElementService])
], MeshElementComponent);
exports.MeshElementComponent = MeshElementComponent;
//# sourceMappingURL=meshelement.component.js.map