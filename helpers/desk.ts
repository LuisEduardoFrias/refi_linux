
export default class Desk {
 fileFolders: (File | Forder)[];
 desktop: string;
 constructor(fileFolders: (File | Forder)[], desktop: string) {
  this.fileFolders = fileFolders;
  this.desktop = desktop;
 }
}