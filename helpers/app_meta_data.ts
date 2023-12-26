
export default class AppMetaData {
  name: string;
  img: string;
  iswindow: boolean;
  file: string;
 constructor(name: string, img: string, iswindow: boolean, file: string) {
  this.name = name;
  this.img = img;
  this.iswindow = iswindow;
  this.file = file;
 }
}