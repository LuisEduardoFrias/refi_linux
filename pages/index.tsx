import { Inter } from 'next/font/google'
import Hardware from './hardware'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
   <div className={inter.className} >
    <Hardware />
   </div>
  )
}
