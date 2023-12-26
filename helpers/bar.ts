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
 showMenu: boolean;
 showPanelVolum: boolean;
 volum: number;
 date: string;
 time: string;
 
 constructor(height: number, desktop: string, volum: number, position: Position) {
  this.h = height;
  this.position = position;
  this.showPanelMenu = false;
  this.showPanelVolum = false;
  this.volum = volum;
  this.desktop = desktop;
  this.datetime();
 }
 
 changeDesktop(index: number) {
  this.desktop = index;
 }
 
 changeVolum(value: number) {
  this.volum = value;
 }
 
 showVolum(value: boolean) {
  this.showPanelVolum = value;
 }
 
 showMenu(value: boolean) {
  this.showPanelMenu = value;
 }
 
 private datetime() {
  this.date = new Date().toLocaleDateString("es-DO");
  this.time = new Date().toLocaleTimeString("es-DO");
 }
}