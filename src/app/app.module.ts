import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './componest/proyectos/proyectos.component';
import { ContactameComponent } from './componest/contactame/contactame.component';
import { SoyComponent } from './componest/soy/soy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    ContactameComponent,
    SoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
