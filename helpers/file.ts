import Point from './point'

export default class File {
 point: Point;
 title: string;
 icon: string | null;
 extention: string;
 
 constructor(point: Point, icon: string | null, title: string, extention: string) {
  this.point = point;
  this.title = title;
  this.icon = icon;
  this.extention = extention;
 }
}