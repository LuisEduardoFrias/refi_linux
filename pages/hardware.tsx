'use client'
import Desktop from './desktop'
import Mouser from './mouser'
import Window from './window'
import Bar from './bar'
import Icon from './icon'
import FileFolder from './file_folder'
import PanelVolum from './panel_volum'
//
import Dt from '@/helpers/desktop'
import Ms from '@/helpers/mouser'
import Wd from '@/helpers/window'
import File from '@/helpers/file'
import Folder from '@/helpers/folder'
import Point from '@/helpers/point'
import Size from '@/helpers/size'
import Dk from '@/helpers/desk'
import Panel from '@/helpers/panel'
import Br from '@/helpers/bar'
//
import { useEffect, useState, useReducer } from 'react';
import styles from '@/styles/hardware.module.css'

const initState = {
 bar: new Br(30, "screen1"),
 panelvolum: 1,
};

export enum actions {
 changeDesktop, 
 showVolum,
 volum,
 
}

function _reducer(state, action) {
  if (action.type === actions.showVolum) {
    state.bar.showVolum(action.value);
    return {...state};
  }
  if (action.type === actions.changeDesktop) {
    const _br = state.bar;
    _br.changeDesktop(action.value);
    return { ...state, bar: _br};
  }
  if (action.type === actions.volum) {
    return { ...state, panelvolum: action.value};
  }
  throw Error('Unknown action.');
}

export default function Hardware() {
  
  const initDt = new Dt(500, 250);
  const [desktop, setDesktop] = useState<Dt>(initDt);
  
  const [state, dispatch] = useReducer(_reducer, initState);
  const {bar} = state;
  
  const handleResize = () => {
   setDesktop(prev => {
    const newSt = {...prev};
    newSt.size.w = window.innerWidth;
    return newSt;
   });
    //window.innerHeight
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
  
  useEffect(() => {
   //alert(JSON.stringify(desktop))
  }, [desktop, state]);
  
  const optionPanel: Panel = new Panel(new Point(-30, 25), new Size(200,50));
  const mouser: Ms = new Ms(new Point(210,160));
  
  const desk1: Dk = new Dk([
   new File(new Point(10, 10), null, "super mario", "exe"),
   new Folder(new Point(10, 45), "Downloads"),
   new File(new Point(10, 80), null,"jesus adrian romero", "mp3"),
   new File(new Point(10, 120), null,"principe de percia - las arenas del tiempo", "mp4"),
  ], "screen1");
  const desk2: Dk = new Dk([
   new File(new Point(10, 10), null, "super mario", "exe"),
  ], "screen2");
  const desk3: Dk = new Dk([], "screen3");
  const desk4: Dk = new Dk([], "screen4");
  
  const _desks: Dk[4] = [desk1,desk2,desk3,desk4];

  const _window: Wd = new Wd(desktop, "Documents", "./document/", [new File(6,7)], [new Folder(4,7)]);
  
  
  return (
   <div className={styles.hardware} >
    <Desktop desktop={desktop} >
     <Bar dispatch={dispatch} state={state}>
      <Icon>description</Icon>
      <Icon>folder</Icon>
      <Icon>travel_explore</Icon>
      <Icon>joystick</Icon>
      <Icon>terminal</Icon>
     </Bar>
     <div className={styles.container_desk} >
      {
       _desks.map( (desk_: Dk, index: number) => {
        if(desk_.desktop === bar.desktop)
         return (
          <div key={index} style={{width:'100%', height: '100%', position: 'relative'}}> 
           {
            desk_.fileFolders.map((obj: File | Folder, inde: number) => 
              <FileFolder key={inde} obj={obj} />
            )
           }
          </div>
         )
       })
      }
      <Window window={_window}>
      {
       _desks.map( (desk_: Dk, index: number) =>
        desk_.fileFolders.
        map((obj: File | Folder, inde: number) => <FileFolder key={inde} obj={obj} />)
       )
      }
      </Window>
     </div>
     {bar.panelVolum && <PanelVolum state={state} dispatch={dispatch} conf={optionPanel}/>}
     <Mouser mouser={mouser}/>
    </Desktop>
   </div>
  )
}
