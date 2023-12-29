import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Renderer2} from "@angular/core";


@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.component.html',
  styleUrls: ['./mescours.component.css']
})
export class MescoursComponent {
  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {
    const indice = this.route.snapshot.queryParamMap.get('indice');
    (window as any).indice = indice;
    const script = this.renderer.createElement('script');
    script.src = '../../assets/script.js'; // Replace with the actual path to the JavaScript file
    this.renderer.appendChild(document.body, script);
  }
}
