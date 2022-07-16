import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';

import { DiscosService } from '../../../../services/discos.service';

@Component({
  selector: 'app-disco-nuevo',
  templateUrl: './disco-nuevo.component.html',
  styleUrls: ['./disco-nuevo.component.css']
})
export class DiscoNuevoComponent implements OnInit {

  // datepicker esta configurado para norteamaericanos

  selectAutor!: string;
  selectAutorTexto!: string;
  fechaPublicacion!: string;


  

  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;
  
  constructor(private discosService: DiscosService,
              private dialogRef: DialogRef) { }

  ngOnInit(): void {
  }

  guardarDisco(form: NgForm){

    //si cumple con llengar los campos requeridos es true
    if(form.valid){

      this.discosService.agregarDisco({
        discoId: 1,
        descripcion: form.value.descripcion,
        titulo: form.value.titulo,
        autor: this.selectAutorTexto,
        precio: form.value.precio,
        fechaPublicacion: new Date(this.fechaPublicacion)
      });
      this.dialogRef.close()
    }

  }

  // queremos capturar la seleccioon del usuaraio 
  // y almacenarlo en una variable 
  selected(event: MatSelectChange){

    // con esto capturo en una variable lo que el usuario ingrese del comobox
    this.selectAutorTexto = (event.source.selected as MatOption).viewValue
  }

}
