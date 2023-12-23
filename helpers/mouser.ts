import Point from './point';

export enum MouserState {
 pointer,
 
}

export default class Mouser {
 point: Point;
 state: MouserState;
 
 constructor(point: Point) {
  this.point = point;
  this.state = MouserState.pointer;
 }
}