import React from 'react';
import Wd from '@/helpers/window'
import Icon from './icon'
import styles from '@/styles/window.module.css';

interface IWindowpProps {
  children: React.ReactNode;
  window: Wd;
}

export default function Window(props:IWindowpProps) {
 
 const _style = {
  width: `${200}px`,
  height:`${100}px`,
  left: `${100}px`,
  top: `${100}px`,
 }
 
 return (
  <div className={styles.window} style={_style}>
   <div className={styles.bar}>
    <span>{props.window.title}</span>
    <div className={styles.contro_size}>
     <Icon className={styles.icon} >close_fullscreen</Icon>
     <Icon className={styles.icon} >check_box_outline_blank</Icon>
     <Icon className={styles.icon} >close</Icon>
    </div>
   </div>
   <div className={styles.container}>
   {props.children}
   </div>
  </div>
 )
}