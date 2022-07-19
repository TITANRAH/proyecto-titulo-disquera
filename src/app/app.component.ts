import { Component, OnInit } from '@angular/core';
import { SeguridadService } from './pages/seguridad/services/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Disquera';

  constructor(private seguridadService: SeguridadService){}
  ngOnInit(): void {
    this.seguridadService.cargarUsuario();
  }
}
