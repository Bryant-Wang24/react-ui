import React, {useState} from 'react';
import Dialog from './dialog';
import Button from "../button/button";

const DialogExample1:React.FC = ()=>{
  const [x,setX] = useState(false)
  return(
      <div>
        <Button level='main' onClick={()=>{setX(!x)}}>open Dialog</Button>
        <Dialog visible={x} closeOnClickMask={true} onClose={()=>{setX(false)}} buttons={
          [
            <Button level='main' onClick={()=>{setX(false)}}>确认</Button>,
            <Button onClick={()=>{setX(false)}}>取消</Button>
          ]
        }>
          <strong>hi</strong>
        </Dialog>
      </div>
  )
}
export default DialogExample1
