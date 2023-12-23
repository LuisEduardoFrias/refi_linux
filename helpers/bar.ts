export enum Position {
 top;
 rigth;
 bottom;
 left;
}

export default class Bar {
 h: number;
 position: Position;
 desktop: string;
 panelVolum: boolean;
 date: string;
 time: string;
 
 constructor(height: number, desktop: string) {
  this.h = height;
  this.position = Position.top;
  this.panelVolum = false;
  this.desktop = desktop;
  this.datetime();
 }
 
 changeDesktop(index: number) {
  this.desktop = index;
 }
 
 showVolum(value: boolean) {
  this.panelVolum = value;
 }
 
 private datetime() {
  new Promise((resolve, reject) => {
   setTimeout(() => {
    this.date = new Date().toLocaleDateString("es-DO");
    this.time = new Date().toLocaleTimeString("es-DO");
   }, 1000);
  });
 }
}