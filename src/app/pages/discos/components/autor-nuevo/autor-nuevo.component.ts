import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutorService } from '../../../../services/autor.service';
import { Subscription } from 'rxjs';

import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-autor-nuevo',
  templateUrl: './autor-nuevo.component.html',
  styleUrls: ['./autor-nuevo.component.css']
})
export class AutorNuevoComponent implements OnInit,OnDestroy {


  autorSubscription = new Subscription()

  constructor(private autorService: AutorService,
              private dialog: DialogRef) { }


  ngOnInit(): void {
  }

  guardarAutor(form: NgForm){

    if(form.valid){


      const autorRequest ={
        
        nombre: form.value.nombre,
        seudonimo: form.value.seudonimo,
        estilo: form.value.estilo,
        nombreCompleto: form.value.nombreCompleto,
        
      }

      this.autorService.crearAutor(autorRequest);
      this.autorSubscription = this.autorService.getActualAutor().subscribe(()=>{
        this.dialog.close()
      })
    }

  }

  ngOnDestroy(): void {
   this.autorSubscription.unsubscribe()
  }
}
