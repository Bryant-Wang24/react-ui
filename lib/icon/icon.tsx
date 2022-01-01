import React from 'react';
import './importIcons'
import './icon.scss';
import classes from '../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string,
    // onClick:React.MouseEventHandler<SVGElement>
}
const Icon:React.FC<IconProps> = ({className,name,...restProps})=>{
    //...restProps在这里 表示除了className和name属性,剩余的所有属性
  return(
      <svg className={classes('fui-icon', className)} {...restProps}>
        <use xlinkHref={`#${name}`}/>
      </svg>
  )
}
export default Icon
