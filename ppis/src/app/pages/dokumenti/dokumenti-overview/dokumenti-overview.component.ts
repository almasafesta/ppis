import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dokumenti-overview',
  templateUrl: './dokumenti-overview.component.html',
  styleUrls: ['./dokumenti-overview.component.css']
})
export class DokumentiOverviewComponent {
    rowData=[
        { naziv:'Potvrda o stipendiji',  datum:'01/01/2001'}
    ]
    columnDefs = [
        { headerName:"Naziv ", field:"naziv", flex: 1.5 },
        { headerName:"Datum izdavanja", field:"datum", flex: 1 }
      ]
   
}