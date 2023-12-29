import {Component, NgModule} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Renderer2} from "@angular/core";
import {AgGridModule} from "ag-grid-angular";
import {ColDef} from "ag-grid-community";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})

export class MescoursComponent {
  rowData: any;
  colDefs: any;
  constructor(private renderer: Renderer2, private route: ActivatedRoute) {}
  ngOnInit() {
    const indice = this.route.snapshot.queryParamMap.get('indice');
    (window as any).indice = indice;
    const script = this.renderer.createElement('script');
    script.src = '../../assets/script.js'; // Replace with the actual path to the JavaScript file
    this.renderer.appendChild(document.body, script);

    this.rowData = [
      {created_at: "2021-01-01", description: "description 1", name: "project 1", project_id: 1}
    ]
    this.colDefs = [
      {field: "created_at"},
      {field: "description"},
      {field: "name"},
      {field: "project_id"}
    ]

  }
}


