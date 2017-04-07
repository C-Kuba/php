import {Routes, RouterModule} from '@angular/router'
import {ElementComponent} from './element/element.component'
import {MeshElementComponent} from './meshelement/meshelement.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/backoffice',
        pathMatch: 'full'
    },
    {
        path: 'backoffice/elements',
        component: ElementComponent
    },
    {
        path: 'backoffice/element/:id',
        component: MeshElementComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);