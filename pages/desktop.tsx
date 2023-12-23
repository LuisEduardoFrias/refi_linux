import React from 'react';
import Dt from '@/helpers/desktop'
import styles from '@/styles/desktop.module.css'

interface IDesktopProps {
  children: React.ReactNode;
  desktop: Dt;
}

export default function Desktop(props: IDesktopProps) {
  const _style = {
   width: `${props.desktop.size.w}px`,
   height: `${props.desktop.size.h}px`,
  };
  
  return (
    <div className={styles.desktop} style={_style} >{props.children}</div>
  );
}