import Folder from '@/helpers/folder'
import File from '@/helpers/file'
import Point from '@/helpers/point'
import Wd from '@/helpers/window'
import Wa from '@/helpers/window_app'
import {SetData, GetData} from '@/helpers/set_data'
//import {ls} from '../root/.bin/move'
//import {move, rm, mkdir} from '../root/.bin/foldee'

export default class Desk {
 fileFolders: (File | Forder)[];
 desktop: string;
 openWindows: (Wd | Wa)[];
 
 constructor(fileFolders: (File | Forder)[], desktop: string) {
  this.fileFolders = fileFolders;
  this.desktop = desktop;
  this.openWindows = [];
 }
 
 async addWindow(wd: Wd | Wa, deskW: number, deskH:number)
 {
  if(wd instanceof Wd)
  {
    const {data}: object = await GetData("ls");
    
    if(data) {
      const files = data?.filter((item) => item.indexOf(".") !== -1 && item.indexOf(".") !== 0 && item.lastIndexOf(".") < item.length - 1);
    
      const folders = data?.filter((item)=> !files.includes(item));
     
      files?.forEach(st => wd.files.push(new File(
       new Point(0,0), 
       null, 
       st.slice(0, st.lastIndexOf('.')), 
       st.slice(st.lastIndexOf('.')),
       true)));
     
      folders?.forEach(st => wd.folders.push(new Folder(
       new Point(0,0),
       st,
       true)));
    }
  }
  
  console.log(JSON.stringify(wd))
  
  this.openWindows.push(wd)
 }
 
 removeWindow(wd: Wd | Wa) {
  const index = this.openWindows.findIndex(w => 
  w.key === wd.key);
  
  if (index !== -1) {
   this.openWindows.splice(index, 1);
  }
 }
 
 updateWindow(wd: Wd | Wa) {
  const index = this.openWindows.findIndex(w => 
  w.key === wd.key);
  
  if (index !== -1) {
   this.openWindows[index] = wd;
  }
 }
}