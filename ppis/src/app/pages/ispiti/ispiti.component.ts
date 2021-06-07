import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ispiti',
  templateUrl: './ispiti.component.html',
  styleUrls: ['./ispiti.component.css']
})
export class IspitiComponent {
    rowData=[   ]
    columnDefs = [
        { headerName:"Naziv predmeta", field:"naziv", flex: 1.5 },
        { headerName:"Profesor", field:"profesor", flex: 1.5 },
        { headerName:"Datum", field:"datum", flex: 1 },
        { headerName:"Ucionica", field:"ucionica", flex: 1 },
      ]
      constructor(private router:ActivatedRoute,private http:HttpClient ){}
      profesor:string;
      student:string;
    
      ngOnInit(){     
        this.router.queryParams.subscribe(params=>{
          console.log("params",params);
          this.profesor = params.profesor;
          this.student = params.student;
          this.getIspiti()
        }) 
        
      }
      getIspiti(){
        this.http.get<any>('assets/ispiti.json')
        .subscribe(data => {
          this.rowData = data;
        });
      }
}