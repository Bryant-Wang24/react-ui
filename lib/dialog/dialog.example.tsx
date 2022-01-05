import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample:React.FC = ()=>{
  const [x,setX] = useState(false)
  const [y,setY] = useState(false)
  return(
    <div>
      <div>
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

      <div>
        <h1>example 2</h1>
        <button onClick={()=>{setY(!y)}}>click</button>
        <Dialog visible={y} closeOnClickMask={true} onClose={()=>{setY(false)}} buttons={
          [
            <button onClick={()=>{setY(false)}}>ok</button>,
            <button onClick={()=>{setY(false)}}>cancel</button>
          ]
        }>
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>

  )
}
export default DialogExample