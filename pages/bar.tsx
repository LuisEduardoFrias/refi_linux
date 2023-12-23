'use client'
import React from 'react';
import Br from '@/helpers/bar'
import Icon from "./icon"
import styles from '@/styles/bar.module.css';
import { useReducer } from 'react';
import { actions } from './hardware';

interface IBarProps {
  children: React.ReactNode;
  dispatch: any;
  state: any;
}

export default function Bar(props:IBarProps) {
 
 const {bar, panelvolum} = props.state;
 
 const _style = {
  height: `${bar.h}px`,
 };
 
 const handleInputChange = (event: React.ChangeEvent) => {
  props.dispatch({type: actions.changeDesktop, value: event.target.value});
 };
  
 return (
  <div className={styles.bar} style={_style}>
   <div div className={styles.home}>
    <Icon className={styles.pets}>pets</Icon>
    <Icon className={styles.bug}>bug_report</Icon>
   </div>
   
    <div className={styles.divider}></div>
    
    <div className={styles.container_app}>
     {props.children}
    </div>
    
    <div className={styles.divider}></div>
    
   <div className={styles.container_windows}>
   
    <label className="window">
     <input type="radio" name="window" value="screen1" checked={bar.desktop === 'screen1'} onChange={handleInputChange} />
     <span>1</span>
    </label>
    
    <label className="window">
     <input type="radio" name="window" value="screen2"  checked={bar.desktop === 'screen2'} onChange={handleInputChange} />
     <span>2</span>
    </label>
    
    <label className="window">
     <input type="radio" name="window" value="screen3"  checked={bar.desktop === 'screen3'} onChange={handleInputChange}/>
     <span>3</span>
    </label>
    
    <label className="window">
     <input type="radio" name="window" value="screen4"  checked={bar.desktop === 'screen4'} onChange={handleInputChange}/>
     <span>4</span>
    </label>
    
   </div>
   
   <div className={styles.divider}></div>
   
   <div className={styles.settings}>
    <span>4:48 22/12/2023</span>
    <Icon>wifi</Icon>
    <Icon onclick={()=>props.dispatch({type: actions.showVolum, value: !bar.panelVolum})}>
    {panelvolum > 90 ? "brand_awareness" : 
    (panelvolum >= 55 && panelvolum < 100 ? "volume_up" :
    (panelvolum > 0 && panelvolum < 55 ? "volume_down" :
     "volume_off"))}</Icon>
    <div className={styles.divider}></div>
    <Icon>lock</Icon>
    <Icon>power_settings_new</Icon>
   </div>
  </div>
 )
}