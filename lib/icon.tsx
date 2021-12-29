import React from 'react';
import wechat from './icons/wechat.svg'
import pay from './icons/pay.svg'
import douyin from './icons/douyin.svg'

console.log(wechat,pay,douyin);

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