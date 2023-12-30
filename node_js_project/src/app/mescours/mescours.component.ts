import {Component, NgModule} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Renderer2} from "@angular/core";
import {AgGridModule} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})

export class MescoursComponent {
  rowData: any;
  columnDefs: any;
  gridOptions: any;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    this.columnDefs = [
      {field: "created_at"},
      {field: "description"},
      {field: "name"},
      {field: "project_id"}
    ]
    this.http.get('http://localhost:3000/api/projects').subscribe((data: any) => {
      this.rowData = data;
    });
    this.gridOptions = {
      domLayout: 'autoHeight',
    };
    
  }
  onRowClicked(event: any) {
    console.log('Row clicked: ', event.data);
  }
  onGridReady(params: any) {
    params.api.autoSizeColumns();
  }
}


