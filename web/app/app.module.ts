import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component'
import {routing} from './app.routing'

import {ElementComponent} from './element/element.component'
import {MeshElementComponent} from './meshelement/meshelement.component'
import {MomentComponent} from './moment/moment.component'
import {MaterialComponent} from "./material/material.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations:[
        AppComponent,
        ElementComponent,
        MeshElementComponent,
        MomentComponent,
        MaterialComponent
    ],
    providers:[
        
    ],
    bootstrap: [AppComponent]
})

export class AppModule{
    
}