import React, {useState} from 'react';
import Dialog,{alert} from './dialog';

const DialogExample:React.FC = ()=>{
  const [x,setX] = useState(false)
  const [y,setY] = useState(false)
  return(
    <div>
      <div style={{position: 'relative', zIndex: 10, border: '1px solid red', color: 'red'}}>
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

      <div style={{position: 'relative', zIndex: 9}}>
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
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
      </div>
    </div>

  )
}
export default DialogExample