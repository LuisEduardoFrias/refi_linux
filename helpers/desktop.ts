import Size from './size'

export default class Desktop {
 size: Size;
 constructor(w: number, h: number) {
  this.size = new Size(w, h);
 }
}