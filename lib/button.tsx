import React from "react"
import classes from "./helpers/classes";
import './button.scss'
interface ButtonProps{
    theme?:string | 'normal'
    size?:string,
    level?:string
}
const Button:React.FC<ButtonProps> = (props) =>{
    const {theme,size,level } = props
  return (
    <button className={classes('fui-button', `gulu-button-theme-${theme}`,`gulu-button-size-${size}`,`gulu-button-level-${level}`) }>
        {props.children}
    </button>
  )
}

export default Button