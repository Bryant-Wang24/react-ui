import React from 'react';
import './importIcons'

interface IconProps{
  name:string
}
const Icon:React.FC<IconProps> = (props)=>{
  return(
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      <svg>
        <use xlinkHref="#wechat"/>
      </svg>
      <svg>
        <use xlinkHref="#pay"/>
      </svg>
      <svg>
        <use xlinkHref="#douyin"/>
      </svg>
    </span>
  )
}
export default Icon