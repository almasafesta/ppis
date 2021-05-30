import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ispiti',
  templateUrl: './ispiti.component.html',
  styleUrls: ['./ispiti.component.css']
})
export class IspitiComponent {
    rowData=[
        { naziv:'PPIS', profesor:'Anel Tanovic', datum:'01/01/2001', ucionica:'MA'}
    ]
    columnDefs = [
        { headerName:"Naziv predmeta", field:"naziv", flex: 1.5 },
        { headerName:"Profesor", field:"profesor", flex: 1.5 },
        { headerName:"Datum", field:"datum", flex: 1 },
        { headerName:"Ucionica", field:"ucionica", flex: 1 },
      ]
}