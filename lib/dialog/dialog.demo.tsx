import React from 'react';
import Demo from "../../demo";
import DialogExample1 from "./dialog.example1";
import DialogExample2 from "./dialog.example2";
import DialogExample3 from "./dialog.example3";
import DialogExample4 from "./dialog.example4";

const DialogDemo:React.FC = ()=>{
    return(
        <div>
            <h1>Dialog示例</h1>
            <Demo code={require('!!raw-loader!./dialog.example1.tsx').default}>
                <section>
                    <h2>常规使用</h2>
                    <main className='main' style={{position: 'relative', zIndex: 10}}>
                        <DialogExample1/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example2.tsx').default}>
                <section>
                    <h2>点击阴影无效</h2>
                    <main className='main' style={{position: 'relative', zIndex: 9}}>
                        <DialogExample2/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example3.tsx').default}>
                <section>
                    <h2>3使用</h2>
                    <main className='main'>
                        <DialogExample3/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example4.tsx').default}>
                <section>
                    <h2>4使用</h2>
                    <main className='main'>
                        <DialogExample4/>
                    </main>
                </section>
            </Demo>
        </div>

    )
}
export default DialogDemo
