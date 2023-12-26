import Point from './point'
import Size from './size'

export enum WindowState {
 minimized,
 normal,
 maximum,
}

export default class Window {
 title: string;
 url: string;
 state: State;
 point: Point;
 size: Size;
 files: File[];
 folders: Forder[];
 
 constructor(title: string, url: string, files?: Files, forders?: Forders) {
  this.title = title;
  this.url = url;
  this.state = WindowState.maximum;
  this.point = new Point(100,100);
  this.size = new Size(300,200);
  this.files = files && [];
  this.polders = forders && [];
 }
}