import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../pages/seguridad/services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(private seguridadService: SeguridadService,
    private router: Router) {

  }

  // si on sesion es true retorna un true, en caso contrario redirecciona a login
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (this.seguridadService.onSesion()) {
      
      return true; //cuando esta en sesion
    } else {

      this.router.navigate(['/'])
      return false // cuando no esta en sesion
    }

    

  }

}
