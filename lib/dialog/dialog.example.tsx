import React, {useState} from 'react';
import Dialog,{alert,confirm,modal} from './dialog';

const DialogExample:React.FC = ()=>{
  const [x,setX] = useState(false)
  const [y,setY] = useState(false)
  const openModal = ()=>{
    const close = modal(<h1>你好
      <button onClick={()=>close()}>close</button>
    </h1>)
  }
  return(
    <div>
      <h1>Dialog示例</h1>
      <div className='section' style={{position: 'relative', zIndex: 10}}>
        <h1>example 1</h1>
        <button onClick={()=>{setX(!x)}}>click</button>
        <Dialog visible={x} closeOnClickMask={false} onClose={()=>{setX(false)}} buttons={
          [
            <button onClick={()=>{setX(false)}}>ok</button>,
            <button onClick={()=>{setX(false)}}>cancel</button>
          ]
        }>
          <strong>hi</strong>
        </Dialog>
      </div>

      <div className='section' style={{position: 'relative', zIndex: 9}}>
        <h1>example 2</h1>
        <button onClick={()=>{setY(!y)}}>click</button>
        <Dialog visible={y} closeOnClickMask={true} onClose={()=>{setY(false)}} buttons={
          [ 
            <button onClick={()=>{setY(false)}}>ok</button>,
            <button onClick={()=>{setY(false)}}>cancel</button>
          ]
        }>
          <strong>hi22</strong>
        </Dialog>
      </div>
      <div className='section'>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1',()=>{
          console.log('你点击了yes')
        },()=>{
          console.log('你点击了no')
        })}>confirm</button>
      </div>
      <div className='section'>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>

  )
}
export default DialogExample
