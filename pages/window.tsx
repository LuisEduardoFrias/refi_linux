'use client'
import React from 'react';
import dynamic from 'next/dynamic'
import LdDualRing from './ld_dual_ring'
import Wd, { WindowState } from '@/helpers/window'
import Wa from '@/helpers/window_app'
import File from '@/helpers/file'
import Folder from '@/helpers/folder'
import Icon from './icon'
import FileFolder from './file_folder'
import { actions } from '@/helpers/reducer'
import styles from '@/styles/window.module.css'

interface IWindowpProps {
  window: Wd | Wa;
  deskW: number;
  deskH: number;
  dispatch: any;
}

export default function Window({window : wd, dispatch, deskH, deskW}:IWindowpProps) {

 wd.size.w = wd.state === WindowState.normal ? wd.size.w : deskW;
 wd.size.h = wd.state === WindowState.normal ?  wd.size.h : deskH;
 wd.point.x = wd.state === WindowState.normal ?  wd.point.x : 0;
 wd.point.y = wd.state === WindowState.normal ?  wd.point.y : 0;
 
 if(wd instanceof Wa) {
   const DynamicComponet = dynamic(() =>
   import(`../raiz/apps/${wd.url}`), {
    ssr: false,
    loading: () => <LdDualRing show={true} />,
   });
 }
 
 function handleNormal()
 {
   if(wd.state == WindowState.maximum)
   {
    dispatch({type: actions.normalApp, window: {...wd, 
    size: {w:200, h:100}, 
    point: {x:50, y:59}, 
    state: 1}
    });
   }
   else if(wd.state == WindowState.normal)
   {
    dispatch({type: actions.normalApp, window: {...wd, 
    size: {w:deskW, h:deskH}, 
    point: {x:0, y:0}, 
    state: 2}
    });
   }
 } 
 
 const _style = {
  width: `${wd.size.w}px`,
  height:`${wd.size.h}px`,
  left: `${wd.point.x}px`,
  top: `${wd.point.y}px`,
 }
 
 const fileFolders: (File | Foler)[] = [];
 
 if(wd.files)
  fileFolders.push(...wd.files);
  
 if(wd.folders)
  fileFolders.push(...wd.folders);
 
 
 return (
  <div className={styles.window} style={_style}>
   <div className={styles.bar}>
    <span>{wd.title}</span>
    <div className={styles.contro_size}>
     <Icon className={styles.icon} >close_fullscreen</Icon>
     <Icon className={styles.icon}
     onclick={handleNormal} >
     {wd.state == WindowState.maximum ? "fullscreen_exit" : "fullscreen" }</Icon>
     <Icon className={styles.icon} onclick={() => dispatch({type: actions.closeApp, window: wd })} >close</Icon>
    </div>
   </div>
   <div className={styles.container}>
   { (wd instanceof Wa) ?
    (<DynamicComponet 
     width={wd.size.w} 
     height={wd.size.h - 18} />) : null
   }
   {
    fileFolders?.map((obj: File | Folder, inde: number) => <FileFolder key={inde} obj={obj} />)
   }
   </div>
  </div>
 )
}