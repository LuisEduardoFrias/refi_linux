import {SetData, GetData} from '@/helpers/set_data'
import { Guid } from 'guid-typescript'
import Wa from '@/helpers/window_app'
import Wd from '@/helpers/window'

export enum actions {
 changeDesktop = "changeDesktop", 
 showVolum = "showVolum",
 showMenu = "showMenu",
 volum = "volum",
 unlock = "unlock",
 changeClose = "changeClose",
 openApp = "openApp",
 closeApp = "closeApp",
 normalApp = "normalApp",
 openFolder = "openFolder",
}

export default function Reducer(state, action) {
  const _actions = {
   showVolum: () => 
   {
    state.bar.showVolum(action.value);
    if(state.bar.showPanelMenu)
     state.bar.showMenu(!action.value);
    return {...state};
   },
   showMenu: () =>
   {
    state.bar.showMenu(action.value);
    if(state.bar.showPanelVolum)
     state.bar.showVolum(!action.value);
    return {...state};
   },
   openApp: () => 
   {
    const desk = state[state.bar.desktop];
    desk.addWindow(new Wa(Guid.create().toString(), action.app.name, action.app.file))
    if(state.bar.showPanelMenu)
     state.bar.showMenu(false);
    return {...state};
   },
   openFolder: () => 
   {
    const desk = state[state.bar.desktop];
    
    desk.addWindow(
     new Wd(Guid.create().toString(), "Folder", null),
     state.initDt.size.w, 
     state.initDt.size.y - state.bar.h);
    
    if(state.bar.showPanelVolum)
     state.bar.showVolum(false);
    if(state.bar.showPanelMenu)
     state.bar.showMenu(false);
    return {...state};
   },
   closeApp: () => 
   {
    const desk = state[state.bar.desktop];
    desk.removeWindow(action.window);
    return {...state};
   },
   normalApp: () => 
   {
    const desk = state[state.bar.desktop];
    desk.updateWindow(action.window);
    return {...state};
   },
   changeClose: () =>
   {
    state.showChecklock = action.value;
    if(state.bar.showPanelVolum)
     state.bar.showVolum(!action.value);
    return {...state};
   },
   changeDesktop: () => 
   {
    const _br = state.bar;
    _br.changeDesktop(action.value);
    return { ...state, bar: _br};
   },
   unlock: () => 
   {
    const _lock = state.confLock;
    
    let lock: boolean = true;
    if(!action.islock) {
      if(action.user === "root" && action?.password === undefined) {
       lock = false;
      } else {
       lock = true;
      }
    }
     
    _lock.changelock(lock);
    state.showChecklock = false;
    return { ...state, confLock: _lock};
   },
   volum : () => 
   {
    const _br = state.bar;
    _br.changeVolum(action.value)
    
    const st = { ...state, bar: _br };
    SetData("setting",{settings: st});
    return st;
   },
   default: () => {throw Error('Unknown action.')},
  };
  
  return (_actions[action.type] || _actions["default"])()
}
