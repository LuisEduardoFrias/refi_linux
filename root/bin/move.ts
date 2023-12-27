import {existsSync,readdirSync} from 'fs'
import {read, write} from './rw'

const filepath: string = './root/etc/navigation.json';

export function cd(path: string) : string {
 const nave = read(filepath);
 
 if(path === "") path = "~";
 
 if(existsSync(path)) {
  write(filepath, {...nave, place: path})
  return path
 }
}

export function ls(path: string) : string[] {
 
 let newpath: string = path ?? "";
 
 if(path === "" || path === undefined) {
  newpath = read(filepath).place;
 }

 if(existsSync(newpath)) {
  return  readdirSync(newpath)
 }
}