import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,OnChanges {
  constructor(private router:ActivatedRoute){}
  profesor:string;
  student:string;
  ngOnInit(){     
    console.log("init");    
  }
  ngOnChanges(){    
    console.log(this.router.queryParams);
    this.router.queryParams.subscribe(params=>{
      console.log("params",params);
      
    })
    this.profesor = this.router.snapshot.paramMap.get('profesor');
    this.student = this.router.snapshot.paramMap.get('student');
    console.log(this.student,this.profesor);
    
  }
}