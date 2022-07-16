import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { SeguridadService } from '../../../seguridad/services/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {

  @Output() sidenav = new EventEmitter

  estadoUsuario: any;
  usuarioSubscription: Subscription = new Subscription

  constructor(private seguridadService: SeguridadService) { }
 

  ngOnInit(): void {

    this.usuarioSubscription = this.seguridadService.seguridadCambio.subscribe(status => {
      this.estadoUsuario = status
    })
  }
  onClicked() {
    this.sidenav.emit();
  }

  logout(){
    this.seguridadService.logout()
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe()
   }




}
