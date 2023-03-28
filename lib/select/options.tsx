import "./select.scss"
import React, { useCallback } from 'react'
import { scopedClassMaker } from "../helpers/classes"
export interface SelectOptionProps<T> {
    value: T
    children: string
    onClick?: (value: T) => void
    selectedValue?: T
  }
  const scopedClass = scopedClassMaker('fui-select-options');
const sc = scopedClass;
export function SelectOption<T>(props: SelectOptionProps<T>) {
  const { value, onClick, children, selectedValue } = props
  const handleClick = useCallback(() => {
    onClick && onClick(value)
  }, [onClick, value])
  return (
    <div
        className= {sc({
            '': true,
            'active': !!selectedValue && value === selectedValue
            })}
        onClick={handleClick}
    >
      {children}
    </div>
  )
}
