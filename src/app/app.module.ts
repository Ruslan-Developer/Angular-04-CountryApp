import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

/* MÓDULO PRINCIPAL DE LA APP  */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Para que sea visible todo lo que este modulo expone
    SharedModule,
    AppRoutingModule //Esto lo hace autmaticamente cuando generamos el modulo de rutas
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
