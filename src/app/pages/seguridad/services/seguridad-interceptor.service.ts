import { HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadInterceptorService {

  constructor(private seguridadService: SeguridadService) {

  }

  // intercepto el request y luego continua su camino
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const tokenSeguridad = this.seguridadService.getToken();

      const request = req.clone({
          headers: req.headers.set('Authorization', 'Bearer' + tokenSeguridad)
      })

      return next.handle(request);
  }

}
