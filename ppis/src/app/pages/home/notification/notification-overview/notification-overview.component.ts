import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'notification-overview',
  templateUrl: './notification-overview.component.html',
  styleUrls: ['./notification-overview.component.css']
})
export class NotificationOverviewComponent {
  @Input() description='';
    public show: boolean = true;
    public buttonName: any = true;

    toggle() {
        
    }

  
}