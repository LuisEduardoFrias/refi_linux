
export default class Controller {
 constructor() {
 }
 
 cd(obj: object, path: string) {
  console.log(path);
 }
 
 ls() {
  console.log("ls");
 }
 
 pwd() {
  console.log("pwd");
 }
 
 rm(obj: object, path: string) {
  console.log(path);
 }
 
 move(obj: object, path1: string, path2: string) {
  console.log(path1+ path2);
  return "move return";
 }
 
}