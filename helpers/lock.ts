
export default class Lock {
 lock: boolean;
 constructor() {
  this.lock = true;
 }
 
 changelock(value: boolean) {
  this.lock = value;
 }
}