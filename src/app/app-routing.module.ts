import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegistroComponent } from './pages/seguridad/registro/registro.component';
import { LoginComponent } from './pages/seguridad/login/login.component';
import { VigilanteGuard } from './guard/vigilante.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/seguridad/seguridad.module').then( m => m.SeguridadModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/discos/discos.module').then( m => m.DiscosModule)
  },
 





 

  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [VigilanteGuard]
})
export class AppRoutingModule { }
