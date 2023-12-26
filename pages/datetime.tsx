import Bar from '@/helpers/bar'
import { useState } from 'react'

export default function DateTime({bar}:Bar) {
 const [datetime, setDatetime] = useState(`${bar.time} ${bar.date}`);
 
 new Promise((resolve, reject) => {
  setTimeout(() => {
    bar.datetime();
    setDatetime(`${bar.time} ${bar.date}`)
  }, 1000);
 });
 
 return (<span>{datetime}</span>)
}