import React from 'react';
import './importIcons'
import './icon.scss';

interface IconProps{
  name:string
}
const Icon:React.FC<IconProps> = (props)=>{
  return(
      <svg className="fui-icon">
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  )
}
export default Icon