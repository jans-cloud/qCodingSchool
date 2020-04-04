import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ThemingService } from '../../services/theming.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor(private theme: ThemingService) {}

  ngOnInit(): void {
    this.onResize();
  }

  intervall: any;
  @ViewChild("canvas", {static: true}) canvas: ElementRef;
  @ViewChild("sectionContainer", {static: true}) sectionContainer: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    clearInterval(this.intervall);
    const screenHeight = this.sectionContainer.nativeElement.offsetHeight;
    const screenWidth = this.sectionContainer.nativeElement.offsetWidth;
    this.canvas.nativeElement.width = screenWidth;
    this.canvas.nativeElement.height = screenHeight;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.columns = this.canvas.nativeElement.height / this.fontSize;
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
    }
    this.intervall = setInterval(this.draw.bind(this), 85);
  }

  // Initialising the canvas
  ctx: any;
  drops = [];
  code = '10';
  letters = this.code.split('');

// Setting up the columns
  fontSize = 10;
  columns: any

// Setting up the drops

// Setting up the draw function
  draw() {
    this.ctx.fillStyle = this.theme.currentAnimationColorBack;
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (var i = 0; i < this.drops.length; i++) {
      var text = this.letters[Math.floor(Math.random() * this.letters.length)];
      this.ctx.fillStyle = '#265fd5';
      this.ctx.fillText(text,this.drops[i] * this.fontSize, i * this.fontSize);
      this.drops[i]++;
    if (this.drops[i] * this.fontSize > this.canvas.nativeElement.height && Math.random() > .99) {
      this.drops[i] = 0;
      }
    }
  }

}
