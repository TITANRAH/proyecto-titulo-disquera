import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscosRoutingModule } from './discos-routing.module';
import { DiscoComponent } from './disco/disco.component';
import { DiscoListComponent } from './disco-list/disco-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material/material.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BarraComponent } from './components/barra/barra.component';


@NgModule({
  declarations: [
    DiscoComponent, 
    DiscoListComponent, 
    HomeComponent, 
    MenuComponent, 
    BarraComponent, 
    
  ],
  exports: [
    HomeComponent, 
    MenuComponent,
    BarraComponent],
  imports: [
    CommonModule,
    DiscosRoutingModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class DiscosModule { }
