import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'predmeti-nav',
  templateUrl: './predmeti-nav.component.html',
  styleUrls: ['./predmeti-nav.component.css']
})
export class PredmetiNavComponent {
  @Output() subjectChange = new EventEmitter<string>();
  onClick(event){
    this.subjectChange.emit(event);
  }
}