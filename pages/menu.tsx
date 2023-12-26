'use client'
import Icon from "./icon"
import Image from 'next/image'
import Mn from '@/helpers/menu'
import AppMetaData from '@/helpers/app_meta_data'
import styles from '@/styles/menu.module.css';
import { actions } from '@/helpers/reducer'

interface IMenu {
 conf: Mn;
 dispatch: any;
 state: any;
}

interface App {
 name: string;
 img: string;
}

export default function Menu(props: IMenu) {
 const {conf, state, dispatch} = props;
 
 const half: number = Math.ceil(conf.app.length / 2);
 const firstHalf: AppMetaData[] = conf.app.slice(0, half);
 const secondHalf: AppMetaData[] = conf.app.slice(half);
 
 const _style = {
  transition: "opacity ease 1s",
  display: state.bar.showPanelMenu ? "block" : "none",
  opacity: state.bar.showPanelMenu ? "1" : "0",
 }
 
 function click(_app: AppMetaData) : void {
  dispatch({type: actions.openApp, app: _app})
 }
 
 function Row({half}: AppMetaData[]) : JSX.Element {
  return (
  <div className={styles.row} >
    {half.map((_app: AppMetaData,i: number) =>
    <div key={i} className={styles.app} onClick={()=> {click(_app)}} >
     <Image src={_app.img}
       alt={_app.name}
       width={100}
       height={100}
       className={styles.img}
       priority
       /> 
     <span>{_app.name}</span>
    </div>
    )}
   </div>)
 }
 return (
 <div className={styles.container_screen} style={_style}>
  <div className={styles.screen}>
   <Row half={firstHalf} />
   <Row half={secondHalf} />
  </div>
 </div>
 )
}
