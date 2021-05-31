import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:ActivatedRoute){}
  profesor:string;
  student:string;

  ngOnInit(){     
    this.router.queryParams.subscribe(params=>{
      console.log("params",params);
      this.profesor = params.profesor;
      this.student = params.student;
    }) 
    
  }

}