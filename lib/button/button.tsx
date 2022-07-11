import React from "react"
import classes from "../helpers/classes";
import './button.scss'
interface ButtonProps extends React.HTMLAttributes<HTMLElement>{
    theme?:string | 'normal'
    size?:string,
    level?:string,
    disabled?:boolean,
    loading?:boolean,
    // onClick?:React.MouseEventHandler<HTMLButtonElement>,
}
const Button:React.FC<ButtonProps> = (props) =>{
    const {theme,size,level,disabled,loading,...rest } = props
    console.log(rest)
  return (
    <button className={
        classes('fui-button',
            `gulu-button-theme-${theme}`,
            `gulu-button-size-${size}`,
            `gulu-button-level-${level}`,
            `gulu-button-disabled-${disabled}`,
            `gulu-button-loading-${loading}`
        )
    } {...rest}>
        {loading && <span className="gulu-loadingIndicator"/>}
        {props.children}
    </button>
  )
}

export default Button