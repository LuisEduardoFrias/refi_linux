'use client'
import Icon from "./icon"
import Panel from '@/helpers/panel'
import styles from "@/styles/panelvolum.module.css"
import setting from '@/raiz/settings.json'
import { actions } from './hardware';

interface IPanel {
 conf: Panel;
 dispatch: any;
 state: any;
}

export default function PanelVolum(props: IPanel) {
 const {volum} = setting;
 const {panelvolum} = props.state;
 
 if(volum !== panelvolum) {
  //props.dispatch({type: actions.volum, value: volum});
 }
 
 const _style = {
  width: `${props.conf.size.w}px`,
  height:`${props.conf.size.h}px`,
  right: `${props.conf.point.x}px`,
  top: `${props.conf.point.y}px`,
 };
 
 function handleChange(event: any) {
  props.dispatch({type: actions.volum, value: event.target.value});
 }
 
 return (
  <div className={styles.container} style={_style}>
   <div>
    <Icon>volume_off</Icon>
    <Icon>volume_down</Icon>
    <Icon>volume_up</Icon>
    <Icon>brand_awareness</Icon>
   </div>
   <input type="range" value={panelvolum} name="volum" onChange={handleChange}/>
 </div>)
}