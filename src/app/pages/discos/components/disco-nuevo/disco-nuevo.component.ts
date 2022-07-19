import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { AutorService } from 'src/app/services/autor.service';

import { DiscosService } from '../../../../services/discos.service';
import { Autor } from '../../interfaces/autor.interface';
import { Subscription } from 'rxjs';
import { Disco } from '../../interfaces/disco.interface';

@Component({
  selector: 'app-disco-nuevo',
  templateUrl: './disco-nuevo.component.html',
  styleUrls: ['./disco-nuevo.component.css']
})
export class DiscoNuevoComponent implements OnInit, OnDestroy {

  // datepicker esta configurado para norteamaericanos

  selectAutor!: string;
  selectAutorTexto!: string;
  fechaPublicacion!: string;
  
  autorSubscription = new Subscription()

  autores: Autor[] = []

  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;
  
  constructor(private discosService: DiscosService,
              private dialogRef: DialogRef,
              private autorServices: AutorService) { }
 

  ngOnInit(): void {
    //this.autores = this.autorServices.getAutores();

    this.autorServices.getAutores();
    this.autorSubscription = this.autorServices.getActualList().subscribe((autores:any)=>{
      this.autores = autores;
    });
  }

    // queremos capturar la seleccioon del usuaraio 
  // y almacenarlo en una variable 
  selected(event: MatSelectChange){

    // con esto capturo en una variable lo que el usuario ingrese del comobox
    this.selectAutorTexto = (event.source.selected as MatOption).viewValue
  }

  guardarDisco(form: NgForm){

    //si cumple con llengar los campos requeridos es true
    if(form.valid){

      const autorRequest = {
        //select autor son los ng model del select
        //selectAutorTexto viene de la funcion selected
        id: this.selectAutor,
        seudonimo: this.selectAutorTexto
      }

      const discoRequest ={
        _id: null,
        descripcion: form.value.descripcion,
        titulo: form.value.titulo,
        autor: autorRequest,
        precio: parseInt(form.value.precio),
        fechaPublicacion: new Date(this.fechaPublicacion)
      }

      this.discosService.agregarDisco(discoRequest);
      this.autorSubscription = this.discosService.agregarDiscoListener().subscribe(()=>{
        this.dialogRef.close()
      })
    }

  }



  ngOnDestroy(): void {
    this.autorSubscription.unsubscribe()
  }

}
