import { Component, EventEmitter, OnInit, Output, OnDestroy, Input } from '@angular/core';
import { SeguridadService } from '../../../seguridad/services/seguridad.service';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/pages/seguridad/interfaces/usuario.interface';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {

  @Output() sidenav = new EventEmitter
  

  estadoUsuario: any;
  usuarioSubscription: Subscription = new Subscription
  nombreUsuario:any;

  constructor(private seguridadService: SeguridadService) { }
 

  ngOnInit(): void {

    this.usuarioSubscription = this.seguridadService.seguridadCambio.subscribe(status => {
      this.estadoUsuario = status
    })
    
   this.nombreUsuario = localStorage.getItem('usuario')
  }
  onClicked() {
    this.sidenav.emit();
  }

  logout(){
    localStorage.removeItem('usuario')
    this.seguridadService.logout()
    
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe()
   }




}
