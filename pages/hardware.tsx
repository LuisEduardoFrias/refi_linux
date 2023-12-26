'use client'
import setting from '@/raiz/settings.json'
import Desktop from './desktop'
import Mouser from './mouser'
import Window from './window'
import Bar from './bar'
import Icon from './icon'
import Lock from './lock'
import Menu from './menu'
import FileFolder from './file_folder'
import PanelVolum from './panel_volum'
import TerminalConsole from '../raiz/apps/terminal/terminal.tsx'
import PanelChecklock from './panel_check_lock'
//
import Dt from '@/helpers/desktop'
import Reducer from '@/helpers/reducer'
import Ms from '@/helpers/mouser'
import Wd from '@/helpers/window'
import File from '@/helpers/file'
import Folder from '@/helpers/folder'
import Point from '@/helpers/point'
import Lk from '@/helpers/lock'
import Size from '@/helpers/size'
import Dk from '@/helpers/desk'
import Panel from '@/helpers/panel'
import Mn from '@/helpers/menu'
import {SetData, GetData} from '@/helpers/set_data'
import Br, { Position } from '@/helpers/bar'
//
import { useEffect, useState, useReducer } from 'react';
import styles from '@/styles/hardware.module.css'

function initState() {
 const panelPoint:Point = new Point(-30, 0);
 const panelSize:Size = new Size(200,50);
 const menuPoint:Point = new Point(0, 0);
 const menuSize:Size = new Size(0,0);
 const mousePoint:Point = new Point(210,160);
 
 return {
  bar: new Br(30, "screen1", 90, Position.top),
  initDt: new Dt(500, 250),
  confLock: new Lk(),
  confPanel: new Panel(panelPoint, panelSize),
  confMenu: new Mn(menuPoint, menuSize, setting.apps),
  mouser: new Ms(mousePoint),
  showChecklock: false,
  screen1: new Dk([new File(new Point(10,10), null,"app","txt")], "screen1"),
  screen2: new Dk([], "screen2"),
  screen3: new Dk([], "screen3"),
  screen4: new Dk([], "screen4"),
 };
};

export default function Hardware() {

  const [state, dispatch] = useReducer(Reducer, initState());
  const {bar, initDt, confPanel, showChecklock, confLock, confMenu, mouser, screen1, screen2, screen3, screen4} = state;
  
  const [desktop, setDesktop] = useState<Dt>(initDt);
  
  const handleResize = () => {
   setDesktop(prev => {
    const newSt = {...prev};
    newSt.size.w = window.innerWidth;
    //newSt.size.h = window.innerHeight;
    return newSt;
   });
  };
  
  useEffect(() => {
   if (typeof window !== 'undefined') {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
     window.removeEventListener('resize', handleResize);
    };
   }
  }, []);
  
  useEffect(() => {}, [desktop, state]);
  
  const _desks: Dk[4] = [screen1,screen2,screen3,screen4];

  return (
   <div className={styles.hardware} >
    <Desktop desktop={desktop} >
     {confLock.lock ?
     (<Lock state={state} dispatch={dispatch} conf={confLock}/>) :
     (<>
     <Bar dispatch={dispatch} state={state} />
     <div className={styles.container_desk} >
      {
       _desks.map( (desk_: Dk, index: number) => {
        if(desk_.desktop === bar.desktop)
         return (
          <div key={index} className={styles.desk}> 
           {
            desk_.fileFolders.map((obj: File | Folder, inde: number) => <FileFolder key={inde} obj={obj} />
            )
           }
           {
            desk_.openWindows?.map((w,i) => <Window 
            key={i} 
            window={w}
            deskW={desktop.size.w - 16.5} 
            deskH={desktop.size.h - bar.h + 2} 
            dispatch={dispatch} />)
           }
          </div>
         )
       })
      }
      {
       <Menu state={state} dispatch={dispatch} conf={confMenu} /> 
      }
      {
       <PanelVolum state={state} dispatch={dispatch} conf={confPanel}/>
      }
     </div>
     </>)
     }
     {showChecklock &&
      <PanelChecklock state={state} dispatch={dispatch}/>
     }
     <Mouser mouser={mouser}/>
    </Desktop>
   </div>
  )
}
