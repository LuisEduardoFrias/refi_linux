import Wd from '@/helpers/window'
import Wa from '@/helpers/window_app'

export default class Desk {
 fileFolders: (File | Forder)[];
 desktop: string;
 openWindows: (Wd | Wa)[];
 
 constructor(fileFolders: (File | Forder)[], desktop: string) {
  this.fileFolders = fileFolders;
  this.desktop = desktop;
  this.openWindows = [];
 }
 
 addWindow(wd: Wd | Wa) {
  this.openWindows.push(wd)
 }
 
 removeWindow(wd: Wd | Wa) {
  const index = this.openWindows.findIndex(w => 
  JSON.stringify(w) === JSON.stringify(wd));
  
  if (index !== -1) {
   this.openWindows.splice(index, 1);
  }
 }
 
 updateWindow(wd: Wd | Wa) {
  const index = this.openWindows.findIndex(w => 
  JSON.stringify(w) === JSON.stringify(wd));
  alert(index)
  alert(JSON.stringify(this.openWindows))
  alert(JSON.stringify(wd))
  
  if (index !== -1) {
   this.openWindows[index] = wd;
  }
 }
}