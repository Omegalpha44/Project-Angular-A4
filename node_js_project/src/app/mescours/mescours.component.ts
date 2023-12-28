import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MesCours} from "../mescours";

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent {
    cours: MesCours = {
        created_at: '2023-12-18',
        description: 'test',
        name: 'maths',
        project_id: 1,
        image:'/assets/maths.png'
    };

}
