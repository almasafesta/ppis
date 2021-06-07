import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dokumenti-form',
  templateUrl: './dokumenti-form.component.html',
  styleUrls: ['./dokumenti-form.component.css']
})
export class DokumentiFormComponent {
  @Output() saveDocument = new EventEmitter<any>();

  dokument={tip:'',svrha:'',datumIzdavanja:''};

  cancel(){
   this.dokument={tip:'',svrha:'',datumIzdavanja:''}; 
  }
  submit(){
    console.log(this.dokument);
    this.dokument.datumIzdavanja=(new Date()).toString();
    this.saveDocument.emit(this.dokument);
  }
}