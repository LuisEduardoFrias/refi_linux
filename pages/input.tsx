
import React, { InputHTMLAttributes } from 'react';
import Icon from "./icon";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
 id: string,
 name: string,
 label: string,
 initValue: string,
 required_text: string,
 icon?: string,
 className?: string,
}

export default function Input(props: IInputProps) {
 
 const { className, id, label, initValue, icon, name, required_text, ...inputProps } = props;
 
 return (
  <fieldset className={`form-group ${className ?? ""}`} >
   <div>
    {icon && <Icon>{icon}</Icon>}
    <label htmlFor={id} className={icon?"":"input-label"}>
     {label}
    </label>
    <input {...inputProps} name={name} id={id} />
   </div>
   <span required htmlFor={id}>{required_text}</span>
  </fieldset>
 )
}