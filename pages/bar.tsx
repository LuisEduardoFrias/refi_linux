'use client'
import React from 'react'
import Br from '@/helpers/bar'
import Icon from "./icon"
import DateTime from './datetime'
import styles from '@/styles/bar.module.css'
import { useReducer } from 'react'
import { actions } from '@/helpers/reducer'

interface IBarProps {
  dispatch: any;
  state: any;
}

export default function Bar(props:IBarProps) {
 
 const {bar} = props.state;
 
 const _style = {
  height: `${bar.h}px`,
 };
 
 const handleInputChange = (event: React.ChangeEvent) => {
  props.dispatch({type: actions.changeDesktop, value: event.target.value});
 };
 
 let iconVolum:string = "";
 
 if(bar.volum >= 74) {
  iconVolum = "brand_awareness";
 }
 else if(bar.volum >= 45 && bar.volum < 74) {
  iconVolum = "volume_up";
 }
 else if(bar.volum > 9 && bar.volum < 45) {
  iconVolum = "volume_down";
 }
 else {
  iconVolum = "volume_off";
 }
 
 return (
  <div className={styles.bar} style={_style}>
   <div div className={styles.home} onClick={()=>props.dispatch({type: actions.showMenu, value: !bar.showPanelMenu})}>
    <Icon className={styles.pets}>pets</Icon>
    <Icon className={styles.bug}>bug_report</Icon>
   </div>
   
    <div className={styles.divider}></div>
    
    <div className={styles.container_app}>
      <Icon>description</Icon>
      <Icon>folder</Icon>
      <Icon>travel_explore</Icon>
      <Icon>joystick</Icon>
      <Icon>terminal</Icon>
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
    <span><DateTime bar={bar} /></span>
    <Icon>wifi</Icon>
    <Icon onclick={()=>props.dispatch({type: actions.showVolum, value:
    !bar.showPanelVolum})}>{iconVolum}</Icon>
    <div className={styles.divider}></div>
    <Icon onclick={()=>props.dispatch({type: actions.changeClose, value: true})}>lock</Icon>
    <Icon>power_settings_new</Icon>
   </div>
  </div>
 )
}