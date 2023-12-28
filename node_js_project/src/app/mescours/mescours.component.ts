import { Component } from '@angular/core';
import {MesCours} from "../mescours";

@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  cours : MesCours = {
    id: 9999,
    name: 'algebra',
    course: 'maths',
    photo: '${this.baseUrl}/example-house.jpg',
    nCards: 10,
  };
}
