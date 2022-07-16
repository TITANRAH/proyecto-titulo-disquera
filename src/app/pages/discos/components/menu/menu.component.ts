import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../../seguridad/services/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  estadoUsuario: any;
  usuarioSubscription: Subscription = new Subscription()
  @Output() sidenav = new EventEmitter

  constructor(private seguridadService: SeguridadService) { }
 
  ngOnInit(): void {

    this.usuarioSubscription = this.seguridadService.seguridadCambio.subscribe(status =>{
      this.estadoUsuario = status
    })
  }

  onClicked(){
    this.sidenav.emit();
   
  }

  ngOnDestroy(): void {
    this.usuarioSubscription.unsubscribe()
  }

  logout(){
    this.sidenav.emit();
    this.seguridadService.logout()
    
  }
}
