import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = '../../assets/script.js'; // Replace with the actual path to the JavaScript file
    this.renderer.appendChild(document.body, script);
  }
}
