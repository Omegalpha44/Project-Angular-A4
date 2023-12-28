import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent {
  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {
    const indice = this.route.snapshot.queryParamMap.get('indice');
    (window as any).indice = indice;
    const script = this.renderer.createElement('script');
    script.src = '../../assets/script.js'; // Replace with the actual path to the JavaScript file
    this.renderer.appendChild(document.body, script);
  }
}
