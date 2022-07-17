import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { VigilanteGuard } from 'src/app/guard/vigilante.guard';
import { DiscoListComponent } from './disco-list/disco-list.component';
import { DiscoComponent } from './disco/disco.component';
import { HomeComponent } from './home/home.component';
import { AutorListComponent } from './autores/autor-list/autor-list.component';

const routes: Routes = [
  {
    path: '',
    // home component sera la ruta padre y sus hijos las demas
    component:HomeComponent,
    
    children: [
      {
        path: 'listado',
        component: DiscoListComponent, 
        canActivate: [VigilanteGuard],
      },
      // {
      //   path: 'agregar',
      //   component: DiscoComponent,
      //   canActivate: [VigilanteGuard]  
      // },
      {
        path: 'autores',
        component: AutorListComponent,
        // canActivate: [VigilanteGuard]  
      },
     
      // {
      //   path: 'editar/:id',
      //   component: AgregarComponent
      // },
      // {
      //   path: 'buscar',
      //   component: BuscarComponent
      // },
      // {
      //   path: ':id',
      //   component: HeroeComponent
      // },    
      // {
      //   path:'**',
      //   redirectTo: 'listado'
      // }
      ],
      
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), 
            CommonModule],
  exports: [RouterModule]
})
export class DiscosRoutingModule { }
