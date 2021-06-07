import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:ActivatedRoute,private http:HttpClient){}
  profesor:string;
  student:string;
  notifications=[];
  ngOnInit(){     
    this.router.queryParams.subscribe(params=>{
      console.log("params",params);
      this.profesor = params.profesor;
      this.student = params.student;
      this.getNotf();
    }) 
    
    
  }
  getNotf() {
    this.http.get<any>('assets/notificaitons.json')
      .subscribe(data => {
        this.notifications = data;
       console.log(data);       
      });
  }
}