
import Controller from './controllers'

export default function Commander(command: string) {
 
 const ct: Controller = new Controller();
 const program: Program = new Program();
 
 program.command("cd <path>").action(ct.cd);
 program.command('ls').action(ct.ls);
 program.command('pwd').action(ct.pwd);
 program.command('rm <path>').option("-r").action(ct.rm);
 program.command('move <path1> <path2>')
 .option("-r").action(ct.move);

 return program.parse(splitWords(command));
}

function splitWords(sentence: string): string[] {
  const words: string[] = sentence.split(' ');
  return words;
}

class Command {
 private name: string;
 private _count_param: number;
 private _action: (...args: any[]) => string;
 private _options: string[];
 private fragments: number;
 
 constructor(name: string, count_param: number)
 {
  this.name = name;
  this.count_param = count_param;
  this._action = null;
  this._options = [];
  this.fragments = 0;
 }
 
 public get countParam() {
  return this._count_param;
 }
 
 public get countOption() {
  return this._options.length;
 }
 
 public get options() {
  return this._options;
 }
 
 public action(ft: (...args: any[]) => void) : void {
  this._action = ft;
  this.fragments = splitWords(this.name).length + this._options.length;
 }
 
 public exe(...args: any[]) {
  return this._action(this, ...args);
 }
 
 public option(op:string) : Command {
  this._options.push(op);
  return this;
 }
}

class Program {
 private commands: object;
 
 constructor() {
  this.commands = {};
 }
 
 public command(cd:string): Command {
  const sp = splitWords(cd);
  
  Reflect.set(this.commands, sp[0], new Command(sp[0], sp.length - 1));
  return this.commands[sp[0]];
 }
 
 public parse(command: string[]) {
  const selectCommand: Command = this.commands[command[0]];
  
  if(!selectCommand)
   return `No command ${command[0]} found, did you mean:`;
   
  /*if(selectCommand.fragments !== command.length)
   if((selectCommand.fragments - selectCommand.countOption) !== command.length)
    return "faltan options: "
 */
 
  const countParam = command.length - 1;
  return selectCommand.exe(command.slice(-countParam));
 }
}