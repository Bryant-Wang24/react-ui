import Demo from "../../demo"
import SwitchExample1 from "./switch.example1"
import React from "react"
import SwitchExample2 from "./switch.example2"


const SwitchDemo:React.FC = () => {
    return (
        <div>
            <h1>Switch示例</h1>
            <Demo code={require('!!raw-loader!./switch.example1.tsx').default}>
                <section>
                    <h2>常规使用</h2>
                    <main className='main'>
                        <SwitchExample1/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./switch.example2.tsx').default}>
                <section>
                    <h2>支持disabled</h2>
                    <main className='main'>
                        <SwitchExample2/>
                    </main>
                </section>
            </Demo>
        </div>
    )
}

export default SwitchDemo
