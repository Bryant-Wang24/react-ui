import "./select.scss"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { scopedClassMaker } from "../helpers/classes"
import { SelectOption, SelectOptionProps } from "./options"

export type SelectValue = number | string

interface SelectProps {
    value?: SelectValue
    onChange?: (value: SelectValue) => void
    disabled?: boolean
    children: Array<React.ReactElement<SelectOptionProps<any>, typeof SelectOption>>
    style?: React.CSSProperties
  }

const scopedClass = scopedClassMaker('fui-select');
const sc = scopedClass;

const Select = (props:SelectProps) => {
    const { disabled = false, onChange, children, value,style } = props
    const [optionsVisible, setOptionsVisible] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)
    const valueByLabelMap = useRef<Map<any, string>>(new Map())


    const handleShowOptions = useCallback(() => {
        if (disabled) {
          return
        }
        setOptionsVisible(true)
      }, [disabled])
      const handleHideOptions = useCallback(() => {
        setOptionsVisible(false)
      }, [])
      const handleSelect = useCallback(
        (v: any) => {
          if (disabled) {
            return
          }
          onChange && onChange(v)
          handleHideOptions()
        },
        [disabled, onChange, handleHideOptions]
      )
    const options = React.Children.map(children, child => {
        child.props.value && valueByLabelMap.current.set(child.props.value, child.props.children)
        return React.cloneElement(child, {
          onClick: handleSelect,
          selectedValue: value,
        })
      })
      function useClickOutside(
        el: HTMLElement | null,
        handler?: (event?: Event) => void,
        events = ['mousedown', 'touchstart']
      ) {
        useEffect(() => {
          const handleClickOutside = (event: Event) =>
            el && !el.contains(event.target as Node) && handler && handler(event)
          for (const event of events) {
            document.addEventListener(event, handleClickOutside)
          }
          return () => {
            for (const event of events) {
              document.removeEventListener(event, handleClickOutside)
            }
          }
        }, [events, handler, el])
      }
        useClickOutside(ref.current, handleHideOptions)
        

    return (
            <div
                className={sc('')}
                style={style}
            >
                <div 
                    className={sc({
                        'valueWrapper': true,
                        'valueWrapper-disabled': disabled,
                        'valueWrapper-arrowUp': optionsVisible,
                    })}
                    onClick={handleShowOptions}
                >
                    
                        <input type="hidden" value={value || ''}/>
                        {
                            value ? valueByLabelMap.current.get(value) : ''
                        }
                </div>
                <div ref={ref} className={sc({
                    'optionsWrapper': true,
                    'optionsWrapper-visible': optionsVisible,
                })}>
                    {options}
                </div>
            </div>
    )
}
Select.Option = SelectOption

export default Select