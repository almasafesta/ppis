import { Component, Input, OnChanges } from "@angular/core"


@Component({
  selector: 'predmeti-grid',
  templateUrl: './predmeti-grid.component.html',
  styleUrls: ['./predmeti-grid.component.scss']
})
export class PredmetiGridComponent implements OnChanges{
    @Input() data=[];
    
    columnDefs = [
        { headerName:"Assignments", field:"assignments", flex: 1.5 },
        { headerName:"Files", field:"files", flex: 1.5 },
      ]
      ngOnChanges(){
        
      }
}
