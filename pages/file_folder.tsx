import Icon from './icon'
import File from '@/helpers/file'
import styles from '@/styles/file_folder.module.css'
import setting from '@/raiz/settings.json'

interface IFileFProps {
 obj: File | Folder;
}

export default function FileFolder(props: IFileFProps) {
  const {obj} = props;
  const {show_extention} = setting;
  
  const fileStyle = {
   left: `${obj.point.x}px`,
   top: `${obj.point.y}px`,
  }
 
  return (
   <div style={fileStyle} className={styles.container}>
    {
     obj instanceof File ?
     (obj.icon !== null ? 
      <img src={obj.icon} alt="" /> : 
      extentionIcon(obj.extention)) :
     (<Icon>folder</Icon>)
    }
    <span>
     {obj.title}
     {
      (obj instanceof File && show_extention) &&
      `.${obj.extention}`
     }
    </span>
   </div>
  )
}
function extentionIcon(extention: string) {
 switch(extention) {
  case 'mp3':
   return <Icon>audio_file</Icon>
  case 'mp4':
   return <Icon>video_file</Icon>
  default:
   return <Icon>draft</Icon>
 }
}