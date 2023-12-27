
import {appendFileSync, readFileSync} from 'fs';
//
// write
//
export function write(path: string, obj: object) {
 try {
   appendFileSync(path, JSON.stringify(obj));
 } catch (err: any) {
  throw new TypeError("error x write file: " + err);
 }
}
//
// read
//
export function read(path: string) : object {
 try { 
  return JSON.parse(readFileSync(path));
 } catch (err: any) {
   throw new TypeError("error x read file: " + err);
 }
}
