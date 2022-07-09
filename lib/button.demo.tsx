
import React from 'react';
import Demo from "../demo";
import ButtonExample1 from "./button.example1";
import ButtonExample2 from "./button.example2";
import ButtonExample3 from "./button.example3";
import ButtonExample4 from "./button.example4";
import ButtonExample5 from "./button.example5";

const ButtonDemo = () => {
    return (
        <div className='buttonExample'>
            <h1>Button示例</h1>
            <Demo code={require('!!raw-loader!./button.example1').default}>
                <section>
                    <h2>常规使用</h2>
                    <main className='default-main'>
                        <ButtonExample1/>
                    </main>
                    <div className='explain'>
                        按钮有三种类型：常规按钮、链接按钮、文本按钮。
                    </div>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example2').default}>
                <section>
                    <h2>支持size</h2>
                    <main className='size-main'>
                        <ButtonExample2/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example3').default}>
                <section>
                    <h2>支持level</h2>
                    <main className='main'>
                        <ButtonExample3/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example4').default}>
                <section>
                    <h2>支持disabled</h2>
                    <main className='default-main'>
                        <ButtonExample4/>
                    </main>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example5').default}>
                <section>
                    <h2>支持loading</h2>
                    <main className='default-main'>
                        <ButtonExample5/>
                    </main>
                </section>
            </Demo>
        </div>
    );
};

export default ButtonDemo;