import Demo from "../../demo"
import React from "react"
import SelectExample1 from "./select.example1"
import SelectExample2 from "./select.example2"


const SelectDemo:React.FC = () => {
    return (
        <div>
            <h1>Select示例</h1>
            <Demo code={require('!!raw-loader!./select.example1.tsx').default}>
                <section>
                    <h2>常规使用</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px'}}>
                        <SelectExample1/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./select.example2.tsx').default}>
                <section>
                    <h2>禁用选择</h2>
                    <main className='main' style={{marginBottom:'10px',marginLeft:'10px'}}>
                        <SelectExample2/>
                    </main>
                </section>
            </Demo>
        </div>
    )
}

export default SelectDemo
