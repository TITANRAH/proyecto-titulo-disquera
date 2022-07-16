import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiscosService } from '../../../services/discos.service';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  // de padre a hijo
  @Input() tituloDisco!: string

  //de hijo a padre
  @Output() discoClicked = new EventEmitter()
  constructor(private discosService: DiscosService) { }

  ngOnInit(): void {
  }

  onClicked() {
    //this.discoClicked.emit(this.tituloDisco);

    //this.discosService.eliminarDisco()
  }



}
