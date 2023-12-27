import {mkdirSync, rmdirSync, renaneSync} from 'fs';
import fs from 'fs';

export function mkdir(pathname: string) : string{
 if(pathname === "") return "";
 //TODO validad si recive un path
 return mkdirSync(pathname)
}

export function rm(path: string) {
 //TODO validsr si es un folder
  rmdirSync(path);
}

export function move(oldpath: string, newpath: string) {
 renaneSync(oldpath, newpath);
}