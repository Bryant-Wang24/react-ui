import React, {useState} from 'react';
import Dialog from './dialog';
import Button from "../button/button";

const DialogExample2:React.FC = ()=>{
  const [y,setY] = useState(false)
  return(
      <div>
        <Button level='main' onClick={()=>{setY(!y)}}>点击阴影无效</Button>
        <Dialog visible={y} closeOnClickMask={false} onClose={()=>{setY(false)}} buttons={
          [ 
            <Button level='main' onClick={()=>{setY(false)}}>确认</Button>,
            <Button onClick={()=>{setY(false)}}>取消</Button>
          ]
        }>
          <strong>hi22</strong>
        </Dialog>
      </div>
  )
}
export default DialogExample2
