import "./switch.scss"
import React from "react"
import { scopedClassMaker } from "../helpers/classes"

interface SwitchProps {
    className?: string
    checked?: boolean
    disabled?: boolean
    onChange?: (checked: boolean) => void
}

const scopedClass = scopedClassMaker('fui-switch');
const sc = scopedClass;

const Switch: React.FC<SwitchProps> = (props:SwitchProps) => {
    const { checked, disabled, onChange } = props
    return (
            <button
                className={
                    sc({
                        '': true,
                        'checked': checked,
                        'disabled': disabled,
                    }, {extra: props.className})     
                }
                disabled={props.disabled}
                onClick={() =>onChange && onChange(!checked)}
            >
                <span></span>
            </button>
    )
}

export default Switch