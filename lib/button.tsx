import React from "react"
import classes from "./helpers/classes";
import './button.scss'
interface ButtonProps{
    type?:string,
}
const Button:React.FC<ButtonProps> = (props) =>{
    const {type } = props
  return (
    <span className={classes('fui-button', `gulu-button-theme-${type}`) }>
        {props.children}
    </span>
  )
}

export default Button