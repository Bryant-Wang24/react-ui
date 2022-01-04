import React, {useState} from 'react';
import Dialog from './dialog';

const DialogExample:React.FC = ()=>{
  const [x,setX] = useState(false)
  return(
   <div>
     <button onClick={()=>{setX(!x)}}>click</button>
     <Dialog visible={x} onClose={()=>{setX(false)}}>
       <strong>hi</strong>
     </Dialog>
   </div>
  )
}
export default DialogExample