import Point from './point'
import Size from './size'

export default class Panel {
 point: Point;
 size: Size;
 constructor(point: Point, size: Size) {
  this.point = point;
  this.size = size;
 }
}