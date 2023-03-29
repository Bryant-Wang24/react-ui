import "./switch.scss"
import React from "react"
import { scopedClassMaker } from "../helpers/classes"

interface SwitchProps {
    style?: React.CSSProperties
    className?: string
    checked?: boolean
    disabled?: boolean
    size?: 'small' | 'default' | 'large'
    text?: {
        openText?: string
        closeText?: string
    }
    onChange?: (checked: boolean) => void
}

const scopedClass = scopedClassMaker('fui-switch');
const sc = scopedClass;

const Switch: React.FC<SwitchProps> = (props:SwitchProps) => {
    const { checked, disabled, onChange,text,style } = props
    return (
            <button
                style={style}
                className={
                    sc({
                        '': true,
                        'checked': checked,
                        'disabled': disabled,
                        'text': Boolean(text && (text.openText || text.closeText)),
                        'small': props.size === 'small',
                        'large': props.size === 'large',
                    }, {extra: props.className})     
                }
                disabled={props.disabled}
                onClick={() =>onChange && onChange(!checked)}
            >
                <span></span>
                <label>{checked ? text?.openText : text?.closeText}</label>
            </button>
    )
}

export default Switch