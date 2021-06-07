import { Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {
  constructor(private router:ActivatedRoute){}
  profesor:string;
  student:string;
  subject = 'Predmet';
  percentage=32;
  ngOnInit(){     
    this.router.queryParams.subscribe(params=>{
      this.profesor = params.profesor;
      this.student = params.student;
    }) 
    
  }
  subjectChange($event){
    this.subject=$event;
    if(this.subject=='Predmet 1') this.percentage=32
    if(this.subject=='Predmet 2') this.percentage=79
    if(this.subject=='Predmet 3') this.percentage=15
    if(this.subject=='Predmet 4') this.percentage=100
    if(this.subject=='Predmet 5') this.percentage=50

  }
}