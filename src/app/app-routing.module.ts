import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";

/* CONFIGURACION BÁSICA DE UN ROUTER */

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    //Cualquier ruta que no sea home o about, redirigir a home
    {
        path: '**',
        redirectTo: 'home',
    }

];

@NgModule({

    imports: [
        RouterModule.forRoot(routes) //Modulo principal de rutas
    ],
    exports: [
        RouterModule //Exportamos el modulo de rutas
    ]

})

export class AppRoutingModule {
  constructor() {}
}