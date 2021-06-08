import { Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DokumentiOverviewComponent } from './dokumenti-overview/dokumenti-overview.component';

@Component({
  selector: 'dokumenti',
  templateUrl: './dokumenti.component.html',
  styleUrls: ['./dokumenti.component.css']
})
export class DokumentiComponent { 
  @ViewChild(DokumentiOverviewComponent)docOverview:DokumentiOverviewComponent;
  constructor(private router:ActivatedRoute){}
  profesor:string;
  student:string;
  newDocument=null;
  hide=true;
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
    this.docOverview.ngOnInit();
  }
}