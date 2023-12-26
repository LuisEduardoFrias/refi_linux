'use client'
import Icon from "./icon"
import Panel from '@/helpers/panel'
import styles from "@/styles/panelvolum.module.css"
import setting from '@/raiz/settings.json'
import { actions } from '@/helpers/reducer'

interface IPanel {
 conf: Panel;
 dispatch: any;
 state: any;
}

export default function PanelVolum(props: IPanel) {
 const {volum} = setting;
 const {bar} = props.state;
 
 if(volum !== bar.volum) {
  //props.dispatch({type: actions.volum, value: volum});
 }
 
 const _style = {
  width: `${props.conf.size.w}px`,
  height:`${props.conf.size.h}px`,
  right: `${props.conf.point.x}px`,
  top: `${props.conf.point.y}px`,
  display: bar.showPanelVolum ? "block" : "none",
  opacity: bar.showPanelVolum ? "1" : "0",
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
   <input type="range" value={bar.volum} name="volum" onChange={handleChange}/>
 </div>)
}