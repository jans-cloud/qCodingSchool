import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ThemingService } from '../shared/services/theming.service';

@Component({
  selector: 'app-dsgvo',
  templateUrl: './dsgvo.component.html',
  styleUrls: ['./dsgvo.component.scss']
})
export class DsgvoComponent implements OnInit {


  intervall: any;
  @ViewChild("canvas", {static: true}) canvas: ElementRef;
  @ViewChild("canvasMobile", {static: true}) canvasMobile: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    clearInterval(this.intervall);
    const screenHeight = window.innerHeight * 0.55;
    const screenWidth = window.innerWidth;
    this.canvasMobile.nativeElement.width = 250;
    this.canvasMobile.nativeElement.height = 50;
    this.canvas.nativeElement.width = 500;
    this.canvas.nativeElement.height = screenHeight;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctxMobile = this.canvasMobile.nativeElement.getContext('2d');
    this.columns = this.canvas.nativeElement.width / this.fontSize;
    this.columnsMobile = this.canvasMobile.nativeElement.width / this.fontSize;
    this.drops = [];
    this.dropsMobile = [];
    if (screenWidth > 964) {
      console.log('ScreenWidth', screenWidth)
      for (let i = 0; i < this.columns; i++) {
        this.drops[i] = 1;
      }
      this.intervall = setInterval(this.draw.bind(this), 85);
    } else {
      console.log('ScreenWidth', screenWidth)
      for (let i = 0; i < this.columnsMobile; i++) {
        this.dropsMobile[i] = 1;
      }
      this.intervall = setInterval(this.drawMobile.bind(this), 85);
    }
  }

  constructor(private theme: ThemingService) { }

  ngOnInit(): void {
    this.onResize();
  }


  // Initialising the canvas
  ctx: any;
  ctxMobile: any;
  drops = [];
  dropsMobile = [];
  code = '10';
  letters = this.code.split('');

// Setting up the columns
  fontSize = 10;
  columns: any
  columnsMobile: any;


// Setting up the drops


// Setting up the draw function
  draw() {
    this.ctx.fillStyle = this.theme.currentAnimationColor;
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (var i = 0; i < this.drops.length; i++) {
      var text = this.letters[Math.floor(Math.random() * this.letters.length)];
      this.ctx.fillStyle = '#265fd5';
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      this.drops[i]++;
    if (this.drops[i] * this.fontSize > this.canvas.nativeElement.height && Math.random() > .95) {
      this.drops[i] = 0;
      }
    }
  }

  drawMobile() {
    this.ctxMobile.fillStyle = this.theme.currentAnimationColor;
    this.ctxMobile.fillRect(0, 0, this.canvasMobile.nativeElement.width, this.canvasMobile.nativeElement.height);
    for (var i = 0; i < this.dropsMobile.length; i++) {
      var text = this.letters[Math.floor(Math.random() * this.letters.length)];
      this.ctxMobile.fillStyle = '#265fd5';
      this.ctxMobile.fillText(text, i * this.fontSize, this.dropsMobile[i] * this.fontSize);
      this.dropsMobile[i]++;
    if (this.dropsMobile[i] * this.fontSize > this.canvasMobile.nativeElement.height && Math.random() > .95) {
      this.dropsMobile[i] = 0;
      }
    }
  }

}
