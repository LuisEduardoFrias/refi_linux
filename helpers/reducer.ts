import {SetData, GetData} from '@/helpers/set_data'
import Wa from '@/helpers/window_app'

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
    desk.addWindow(new Wa(action.app.name, action.app.file))
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
    alert("hh")
    return {...state};
   },
   changeClose: () =>
   {
    state.showChecklock = action.value;
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
    SetData({settings: st});
    return st;
   },
   default: () => {throw Error('Unknown action.')},
  };
  
  return (_actions[action.type] || _actions["default"])()
}
