import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'dokumenti-overview',
  templateUrl: './dokumenti-overview.component.html',
  styleUrls: ['./dokumenti-overview.component.css']
})
export class DokumentiOverviewComponent implements OnInit,OnChanges{
  @Input() newDocument=null;
  hide=true;
  gridOptions:GridOptions;
    rowData=[]
    columnDefs = [
      { headerName:"Tip uvjerenja", field:"tip", flex: 1.5 }, 
      { headerName:"Svrha izdavanja", field:"svrha", flex: 1.5 },
      { headerName:"Status", field:"status", flex: 1.5 },
      { headerName:"Datum izdavanja", field:"datumIzdavanja", flex: 1 }
      ]
      constructor(private http:HttpClient,private router:ActivatedRoute){}
      ngOnInit(){
        this.getUsers();
      }
      getUsers(){
        this.http.get<any>('assets/dokumenti.json')
        .subscribe(data => {         
          this.router.queryParams.subscribe(params=>{
            console.log("params",params);
            this.rowData = data;    
            if(this.newDocument && this.newDocument!={}){
              this.rowData.push(this.newDocument);
            }
            if( params.profesor==undefined && params.student==undefined )
            {this.rowData.push({tip:'Potvrda o redovnom studiranju',svrha:'Potvrda za prevoz',datumIzdavanja:'08/06/2021',status:'U obradi'})}
          }) 
          
        });
      }
      ngOnChanges(){
        console.log("kod grida",this.newDocument);
        
        
      }
}