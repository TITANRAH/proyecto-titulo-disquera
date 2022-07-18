// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { SeguridadService } from "../services/seguridad.service";

// @Injectable()
// export class SeguridadInterceptor implements HttpInterceptor {

//     constructor(private seguridadService: SeguridadService) {

//     }

//     // intercepto el request y luego continua su camino
//     intercept(req: HttpRequest<any>, next: HttpHandler) {
//         const tokenSeguridad = this.seguridadService.getToken();

//         const request = req.clone({
//             headers: req.headers.set('Authorization', 'Bearer' + tokenSeguridad)
//         })

//         return next.handle(request);
//     }


// }