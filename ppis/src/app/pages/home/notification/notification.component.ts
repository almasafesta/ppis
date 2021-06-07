import { Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit,OnChanges{
    @Input() notification;
    public loadComponent=false;
    loadMyChildComponent() {
        this.loadComponent = !this.loadComponent;
    }
    ngOnChanges(){
      console.log(this.notification);
    }
    ngOnInit(){
      console.log(this.notification);
    }
  
}