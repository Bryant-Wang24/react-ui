import React from 'react';
import './importIcons'
import './icon.scss';
import classes from './helpers/classer'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string,
    // onClick:React.MouseEventHandler<SVGElement>
}
const Icon:React.FC<IconProps> = (props)=>{
    console.log('props',props)
    const {className,...restProps} = props//...restProps在这里 表示除了className,剩余的所有属性
  return(
      <svg className={classes('fui-icon', className)} {...restProps}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  )
}
export default Icon
