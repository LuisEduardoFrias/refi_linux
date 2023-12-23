import Point from './point'

export default class Folder {
 point: Point;
 title: string;
 constructor(point: Point, title: string) {
  this.point = point;
  this.title = title;
 }
}