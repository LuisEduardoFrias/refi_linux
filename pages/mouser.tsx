import Icon from './icon'
import Ms from '@/helpers/mouser'
import styles from '@/styles/mouser.module.css'

interface IMouserProps {
 mouser: Ms;
}
export default function Mouser(props:IMouserProps) {
 
 const _style = {
  top: `${props.mouser.point.y}px`,
  left: `${props.mouser.point.x}px`
 }
 return (<Icon className={styles.mouser} style={_style} >arrow_selector_tool</Icon>)
}

/*
icon: pinch  pan_tool_alt
propiedad "cursor" en CSS: 

"pointer": Este valor hace que el cursor del mouse se convierta en una mano, indicando que el elemento es interactivo, como un enlace o un botón.
"default": Este es el valor predeterminado y muestra el cursor estándar del sistema operativo.
"help": Este valor muestra un cursor con un signo de interrogación, indicando que el elemento proporciona ayuda o información adicional.
"crosshair": Este valor muestra un cursor en forma de cruz, que a menudo se utiliza para indicar que el usuario puede seleccionar un área específica.
"move": Este valor muestra un cursor con flechas indicando que el elemento se puede mover.
"not-allowed": Muestra un cursor con un círculo con una barra diagonal, indicando que la acción no está permitida.
"text": Muestra un cursor en forma de I-beam, indicando que el texto es seleccionable.
"wait": Muestra un cursor con un reloj de arena, indicando que el usuario debe esperar, comúnmente utilizado para indicar que se está cargando algo.
"alias": Muestra un cursor con dos flechas en direcciones opuestas, indicando que se puede realizar una acción de arrastrar o mover.
"e-resize", "n-resize", "s-resize", "w-resize": Estos valores muestran cursores que indican que se puede redimensionar el elemento en la dirección especificada.
"col-resize", "row-resize": Estos valores también indican la capacidad de redimensionar, pero en forma de columna o fila respectivamente.
"grab", "grabbing": Estos valores muestran cursores que indican que el usuario puede agarrar (grab) o soltar (grabbing) un elemento, comúnmente utilizado para indicar la capacidad de arrastrar elementos.
*/