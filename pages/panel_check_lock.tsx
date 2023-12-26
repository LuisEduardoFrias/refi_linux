
"use client"
import LdDualRing from './ld_dual_ring'
import CardNotification, { ModalType } from "./card_notification";
import styles from "@/styles/lock.module.css"
import { actions } from '@/helpers/reducer'
import { useState } from 'react'

interface IPanelChecklock {
 dispatch: any;
 state: any;
}

export default function PanelChecklock(props: IPanelChecklock) {
 const [isClose, setIsClose] = useState(false)
 const [isLoader, setIsLoader] = useState(true)

 
 function changeLoad() {
  setTimeout(()=>{
   setIsClose(false)
   setIsLoader(false)
   props.dispatch({type: actions.unlock, islock: true})
  },4000)
 }
 
 return (
 <>
  {isClose ?
   <>
    <LdDualRing show={isLoader} />
    {changeLoad()}
   </> :
   <CardNotification 
    show={true}
    type={ModalType.warning}
    title={"Check logout"}
    dialog={"Seguro que decea cerrar?"}
    onClick1={(event: any) => {
     setIsClose(true)
    }} 
    onClick2={(event: any) => {
     props.dispatch({type: actions.changeClose, value: false})
    }} />
  }
 </>)
}