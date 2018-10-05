import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ViewChild} from "@angular/core";
import { group } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'myngapp';

  showFiller = false;
  ctx:CanvasRenderingContext2D;
  startLine=false;
  selectedDrawingObject:string;

  //@ViewChild("myCanvas") myCanvas;
  @ViewChild("exitImg") exitImg;
  @ViewChild("gwcImg") gwcImg;
  @ViewChild("rwcImg") rwcImg;

  ngOnInit()
  {
    
 
  
  }

 

  allowDrop(ev) {
    ev.preventDefault();
  }

  touchHandler(te:TouchEvent)
  {
    te.preventDefault();
    let exitCircuit:HTMLImageElement = this.exitImg.nativeElement;
      
    exitCircuit.style.left = te.touches[te.touches.length-1].clientX  - exitCircuit.offsetWidth/2+"px";
    exitCircuit.style.top = te.touches[te.touches.length-1].clientY - exitCircuit.offsetHeight/2+"px";
    
  }
  touchrwcHandler(te:TouchEvent)
  {
    te.preventDefault();
    let rwcCircuit:HTMLImageElement = this.rwcImg.nativeElement;
      
    rwcCircuit.style.left = te.touches[te.touches.length-1].clientX  - rwcCircuit.offsetWidth/2+"px";
    rwcCircuit.style.top = te.touches[te.touches.length-1].clientY - rwcCircuit.offsetHeight/2+"px";
    
  }
  touchgwcHandler(te:TouchEvent)
  {
    te.preventDefault();
    let gwcCircuit:HTMLImageElement = this.gwcImg.nativeElement;
      
    gwcCircuit.style.left = te.touches[te.touches.length-1].clientX  - gwcCircuit.offsetWidth/2+"px";
    gwcCircuit.style.top = te.touches[te.touches.length-1].clientY - gwcCircuit.offsetHeight/2+"px";
    
  }

  dropHandler(ev:DragEvent)
  {
    ev.preventDefault();
    
    console.trace("drop");
    var data = ev.dataTransfer.getData("text");
    if(data == "exitImg")
    {
      
      let exitCircuit:HTMLImageElement = this.exitImg.nativeElement;
      
      exitCircuit.style.left = ev.pageX - exitCircuit.offsetWidth/2+"px";
      exitCircuit.style.top = ev.pageY - exitCircuit.offsetHeight/2+"px";
      
    }
    else if(data == "gwcImg")
    {
      
      let gwcCircuit:HTMLImageElement = this.gwcImg.nativeElement;
      gwcCircuit.style.left = ev.pageX - gwcCircuit.offsetWidth/2+"px";
      gwcCircuit.style.top = ev.pageY - gwcCircuit.offsetHeight/2+"px";
    }
    else if(data == "rwcImg")
    {
      
      let rwcCircuit:HTMLImageElement = this.rwcImg.nativeElement;
      rwcCircuit.style.left = ev.pageX - rwcCircuit.offsetWidth/2+"px";
      rwcCircuit.style.top = ev.pageY - rwcCircuit.offsetHeight/2+"px";
      
    }
  }

 

  ngAfterViewInit()
  {
    /*let canvas = this.myCanvas.nativeElement;
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    this.ctx = canvas.getContext("2d");
    var img1 = new Image();
    img1.src ="assets/images/Exit.png";
    var imgData=this.ctx.drawImage(img1,100,100,500,100);*/
    
    
  }

  dragHandler(de:DragEvent)
  {
    console.trace("drag");
    de.dataTransfer.setData("text", (de.target as HTMLImageElement).id);
  }

  capturePoint(me:MouseEvent)
  {
    if(this.selectedDrawingObject=="line")
    {
      this.ctx.lineWidth = 5;
    if(this.startLine)
    {
      this.ctx.lineTo(me.offsetX,me.offsetY);
      this.ctx.stroke(); 
    }
    else{
    this.ctx.moveTo(me.offsetX,me.offsetY);
    this.startLine= !this.startLine;
    }
    
  }
  else{
    this.ctx.closePath();
  }
  }

  shapeSelectClick(value){
    console.trace(value);
    this.selectedDrawingObject = value;
    if(this.selectedDrawingObject == "line")
    {
      this.ctx.beginPath();
    }
  }

   clearRect( sx:number, sy:number,ex:number,ey:number) {
    this.ctx.clearRect(sx,sy,ex,ey);
  }

}
