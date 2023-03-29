import "./switch.scss"
import React from "react"
import { scopedClassMaker } from "../helpers/classes"

interface SwitchProps {
    className?: string
    checked?: boolean
    disabled?: boolean
    text?: {
        openText?: string
        closeText?: string
    }
    onChange?: (checked: boolean) => void
}

const scopedClass = scopedClassMaker('fui-switch');
const sc = scopedClass;

const Switch: React.FC<SwitchProps> = (props:SwitchProps) => {
    const { checked, disabled, onChange,text } = props
    return (
            <button
                className={
                    sc({
                        '': true,
                        'checked': checked,
                        'disabled': disabled,
                        'text': Boolean(text && (text.openText || text.closeText)),
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