import Point from './point'

export default class Folder {
 point: Point;
 title: string;
 inWindow: boolean;
 
 constructor(point: Point, title: string, inWindow?: boolean) {
  this.point = point;
  this.inWindow = inWindow;
  this.title = title;
 }
}