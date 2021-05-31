import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit,OnChanges {
  constructor(private router:ActivatedRoute){}
 @Input() profesor:string;
 @Input() student:string;
  ngOnInit(){     
  }
  ngOnChanges(){    

  }
}