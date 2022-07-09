
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
                        按钮有常规、链接、文本三种按钮。
                        通过设置<span> theme </span>为<span>link</span><span>text</span> 分别把按钮设置为 链接按钮 和 文本按钮。若不设置<span>theme</span> ，则为常规按钮。
                    </div>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example2').default}>
                <section>
                    <h2>支持size</h2>
                    <main className='size-main'>
                        <ButtonExample2/>
                    </main>
                    <div className='explain'>
                        按钮有大、中、小三种尺寸。
                        通过设置<span> size </span>为<span>large</span> <span>small</span>  分别把按钮设为大、小尺寸。若不设置<span>size</span> ，则尺寸为中。
                    </div>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example3').default}>
                <section>
                    <h2>支持 level</h2>
                    <main className='main'>
                        <ButtonExample3/>
                    </main>
                    <div className='explain'>
                        按钮有主要、普通、危险三种按钮。
                        通过设置<span>level</span>  为<span>main</span> <span>danger</span>  分别把按钮设为主要按钮、危险按钮。若不设置<span>level</span> ，则默认为普通按钮。
                    </div>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example4').default}>
                <section>
                    <h2>支持disabled</h2>
                    <main className='default-main'>
                        <ButtonExample4/>
                    </main>
                    <div className='explain'>
                        添加<span>disabled</span>  属性 为<span>true</span>  即可让按钮处于不可用状态，同时按钮样式也会改变。
                    </div>
                </section>
            </Demo>
            <Demo code={require('!!raw-loader!./button.example5').default}>
                <section>
                    <h2>支持loading</h2>
                    <main className='default-main'>
                        <ButtonExample5/>
                    </main>
                    <div className='explain'>
                        添加<span>loading</span>  属性为<span>true</span>  即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
                    </div>
                </section>
            </Demo>
        </div>
    );
};

export default ButtonDemo;