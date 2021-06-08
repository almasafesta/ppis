import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'dokumenti-form',
  templateUrl: './dokumenti-form.component.html',
  styleUrls: ['./dokumenti-form.component.css'],
  providers: [DatePipe]
})
export class DokumentiFormComponent {
  @Output() saveDocument = new EventEmitter<any>();

  dokument={tip:'',svrha:'',datumIzdavanja:'',status:'U obradi'};
  constructor(public datepipe: DatePipe){}
  cancel(){
   this.dokument={tip:'',svrha:'',datumIzdavanja:'',status:'U obradi'}; 
  }
  submit(){
    console.log(this.dokument);
    this.dokument.datumIzdavanja=this.datepipe.transform(new Date(), 'dd/MM/yyyy');
    this.saveDocument.emit(this.dokument);
  }
}