"use client"
import Icon from "./icon"
import Lock from '@/helpers/lock'
import Input from './input'
import Form from './form'
import styles from "@/styles/lock.module.css"
import { actions } from '@/helpers/reducer'

interface ILock {
 conf: Lock;
 dispatch: any;
 state: any;
}

export default function Lock(props: ILock) {
 
 function handleSubmit(
  data: object[],
  setLoader: (show: boolean) => void,
  setNotif: (obj: INotification) => void) : boolean
 {
  setTimeout(()=>{
   setLoader(false)
   props.dispatch({type: actions.unlock, user: data.user, password: data.password})
  },3000)
 }
 
 return (
   <div className={styles.lock}>
     
     <div div className={styles.home}>
      <Icon className={styles.pets}>pets</Icon>
      <Icon className={styles.bug}>bug_report</Icon>
     </div>
     
    <Form onSubmit={handleSubmit}  >
     
     <Input 
       id="user"
       name="user"
       autoComplete="off"
       type="text"
       placeholder="user"
       label="User"
       required_text="Campo requerido"
       className="register-form-group" />
       
     <Input 
       id="password"
       name="password"
       autoComplete="off"
       type="text"
       placeholder="password"
       label="Password"
       required_text="Campo requerido"
       className="register-form-group" />

     <button>Log in</button>
    </Form>
   </div> 
 )
}