"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var element_component_1 = require("./element/element.component");
var meshelement_component_1 = require("./meshelement/meshelement.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/backoffice',
        pathMatch: 'full'
    },
    {
        path: 'backoffice/elements',
        component: element_component_1.ElementComponent
    },
    {
        path: 'backoffice/element/:id',
        component: meshelement_component_1.MeshElementComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map