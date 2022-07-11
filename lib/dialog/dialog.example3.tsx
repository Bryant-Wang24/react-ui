import React from 'react';
import {alert,confirm} from './dialog';
import Button from "../button/button";

const DialogExample3:React.FC = ()=>{
  return(
      <div>
        <Button level='main' onClick={() => alert('1')}>alert</Button>
        <Button level='main' onClick={() => confirm('122',()=>{
          console.log('你点击了yes')
        },()=>{
          console.log('你点击了no')
        })}>confirm</Button>
      </div>
  )
}
export default DialogExample3
