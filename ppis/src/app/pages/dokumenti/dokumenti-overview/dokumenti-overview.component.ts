import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'dokumenti-overview',
  templateUrl: './dokumenti-overview.component.html',
  styleUrls: ['./dokumenti-overview.component.css']
})
export class DokumentiOverviewComponent implements OnInit,OnChanges{
  @Input()newDocument=null;
  gridOptions:GridOptions;
    rowData=[]
    columnDefs = [
      { headerName:"Tip uvjerenja", field:"tip", flex: 1.5 }, 
      { headerName:"Svrha izdavanja", field:"svrha", flex: 1.5 },
      { headerName:"Datum izdavanja", field:"datumIzdavanja", flex: 1 }
      ]
      constructor(private http:HttpClient){}
      ngOnInit(){
        this.getUsers();
      }
      getUsers(){
        this.http.get<any>('assets/dokumenti.json')
        .subscribe(data => {
          this.rowData = data;     
        });
      }
      ngOnChanges(){
        console.log("kod grida",this.newDocument);
        
        if(this.newDocument && this.newDocument!={}){
          this.rowData.push(this.newDocument)
          this.gridOptions.api.setRowData( this.rowData);
        }
      }
}