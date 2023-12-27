import Point from './point'

export default class File {
 point: Point;
 title: string;
 icon: string | null;
 extention: string;
 inWindow: boolean;
 
 constructor(point: Point, icon: string | null, title: string, extention: string, inWindow?: boolean) {
  this.point = point;
  this.title = title;
  this.inWindow = inWindow;
  this.icon = icon;
  this.extention = extention;
 }
}