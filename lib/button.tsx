import React from "react"
import classes from "./helpers/classes";
import './button.scss'
interface ButtonProps{
    theme?:string | 'normal'
    size?:string,
    level?:string,
    disabled?:boolean,
    loading?:boolean,
}
const Button:React.FC<ButtonProps> = (props) =>{
    const {theme,size,level,disabled,loading } = props
  return (
    <button className={
        classes('fui-button',
            `gulu-button-theme-${theme}`,
            `gulu-button-size-${size}`,
            `gulu-button-level-${level}`,
            `gulu-button-disabled-${disabled}`,
            `gulu-button-loading-${loading}`
        )
    }>
        {loading && <span className="gulu-loadingIndicator"/>}
        {props.children}
    </button>
  )
}

export default Button