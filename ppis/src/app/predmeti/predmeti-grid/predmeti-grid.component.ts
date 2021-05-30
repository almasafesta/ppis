import { Component } from "@angular/core"


@Component({
  selector: 'predmeti-grid',
  templateUrl: './predmeti-grid.component.html',
  styleUrls: ['./predmeti-grid.component.scss']
})
export class PredmetiGridComponent{
    rowData=[
        { assignments:'Zadaca 1', files:'upload(pdf)'}
    ]
    columnDefs = [
        { headerName:"Assignments", field:"assignments", flex: 1.5 },
        { headerName:"Files", field:"files", flex: 1.5 },
      ]

}
