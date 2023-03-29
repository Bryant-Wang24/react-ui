import Demo from "../../demo"
import SwitchExample1 from "./switch.example1"
import React from "react"
import SwitchExample2 from "./switch.example2"
import SwitchExample3 from "./switch.example3"
import SwitchExample4 from "./switch.example4"


const SwitchDemo:React.FC = () => {
    return (
        <div>
            <h1>Switch示例</h1>
            <Demo code={require('!!raw-loader!./switch.example1.tsx').default}>
                <section>
                    <h2>常规使用</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px'}}>
                        <SwitchExample1/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./switch.example3.tsx').default}>
                <section>
                    <h2>支持传入text</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px'}}>
                        <SwitchExample3/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./switch.example4.tsx').default}>
                <section>
                    <h2>支持size</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px',display:'flex'}}>
                        <SwitchExample4/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./switch.example2.tsx').default}>
                <section>
                    <h2>支持disabled</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px'}}>
                        <SwitchExample2/>
                    </main>
                </section>
            </Demo>
            
        </div>
    )
}

export default SwitchDemo
