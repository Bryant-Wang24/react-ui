import React from 'react';
interface Props{
  visible:Boolean
}
const Dialog:React.FC<Props> = (props)=>{
  return(
    props.visible?
    <div>dialog</div>:null
  )
}
export default Dialog