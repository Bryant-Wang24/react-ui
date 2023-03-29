import Demo from "../../demo"
import ToastExample1 from "./toast.example1"
import React from "react"


const SwitchDemo:React.FC = () => {
    return (
        <div>
            <h1>Toast示例</h1>
            <Demo code={require('!!raw-loader!./toast.example1.tsx').default}>
                <section>
                    <h2>常规使用</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px',display:'flex'}}>
                        <ToastExample1/>
                    </main>
                </section>
            </Demo>
        </div>
    )
}

export default SwitchDemo
