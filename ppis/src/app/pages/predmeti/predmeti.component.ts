import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'ag-grid-community';

@Component({
  selector: 'predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {
  constructor(private router:ActivatedRoute,private http:HttpClient){}
  profesor:string;
  student:string;
  subject = 'Predmet';
  percentage=0;
  predmeti=[];
  assignments=[];
  ngOnInit(){     
    this.router.queryParams.subscribe(params=>{
      this.profesor = params.profesor;
      this.student = params.student;     
      if(this.profesor){
        this.getProfesor();
      }else{
        this.getStudent();
      }
    }) 
    
  }
  subjectChange($event){
    this.subject=$event;
    this.predmeti.map(i=>{
      if(i['naziv']==$event){
        this.percentage=i['bodovi'];
        this.assignments=i['assignments']
      }
    })
  }

  getStudent() {
    this.http.get<any>('assets/predmetiStudent.json')
      .subscribe(data => {
        this.predmeti = data;
       console.log(data);       
      });
  }
  getProfesor() {
    this.http.get<any>('assets/predmetiProfesor.json')
      .subscribe(data => {
        this.predmeti = data;
       console.log(data);       
      });
  }
}