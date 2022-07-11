import React from 'react';
import {modal} from './dialog';
import Button from "../button/button";

const DialogExample4:React.FC = ()=>{
  const openModal = ()=>{
    const close = modal(<h1>你好
      <Button level='main' onClick={()=>close()}>close</Button>
    </h1>)
  }
  return(
      <div>
        <Button level='main' onClick={openModal}>modal</Button>
      </div>
  )
}
export default DialogExample4
