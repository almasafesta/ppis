import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dokumenti',
  templateUrl: './dokumenti.component.html',
  styleUrls: ['./dokumenti.component.css']
})
export class DokumentiComponent { 
  constructor(private router:ActivatedRoute){}
  profesor:string;
  student:string;
  newDocument=null;
  ngOnInit(){     
    this.router.queryParams.subscribe(params=>{
      console.log("params",params);
      this.profesor = params.profesor;
      this.student = params.student;
    }) 
    
  }
  saveDocument($event){
    console.log("iz glavne",$event);
    this.newDocument=$event;
  }
}