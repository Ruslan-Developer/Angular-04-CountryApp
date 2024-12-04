import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule // No tengo claro por que tengo que importarlo aqui
  ],
  exports: [
    HomePageComponent, //Para usarlo fuera de este modulo
    AboutPageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
