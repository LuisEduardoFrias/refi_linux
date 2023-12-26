import Point from './point'
import Size from './size'
import AppMetaData from './app_meta_data'

export default class Menu {
 point: Point;
 size: Size;
 app: AppMetaData[];
 
 constructor(point: Point, size: Size, app: AppMetaData[]) {
  this.point = point;
  this.size = size;
  this.app = app;
 }
}