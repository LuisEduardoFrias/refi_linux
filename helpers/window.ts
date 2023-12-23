import Point from './point'
import Size from './size'

export enum WindowState {
 clase,
 minimized,
 normal,
 middle,
 maximun,
}

export default class window {
 title: string;
 url: string;
 state: State;
 point: Point;
 size: Size;
 files: File[];
 folders: Forder[];
 
 constructor(desktop: Desktop, title: string, url: string, files: Files, forders: Forders) {
  this.title = title;
  this.url = url;
  this.state = WindowState.maximum;
  this.point = new Point(desktop.size.w/2 - 150, desktop.size.h - 100);
  this.size = new Size(300,200);
  this.files = files;
  this.polders = forders;
 }
}