import React from 'react';
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className='buttonExample'>
      <h1>Button示例</h1>
      <section>
        <h2>常规使用</h2>
          <main className='default-main'>
              <Button>常规按钮</Button>
              <Button theme='link'>链接按钮</Button>
              <Button theme='text'>文本按钮</Button>
          </main>
      </section>

        <section>
            <h2>支持size</h2>
            <main className='size-main'>
                <div className='size-content'>
                    <Button size='big'>大大按钮</Button>
                    <Button>普通按钮</Button>
                    <Button size='small'>小小按钮</Button>
                </div>
                <div className='size-content'>
                    <Button theme='link' size='big'>大大按钮</Button>
                    <Button theme='link'>普通按钮</Button>
                    <Button theme='link' size='small'>小小按钮</Button>
                </div>
                <div className='size-content'>
                    <Button theme='text' size='big'>大大按钮</Button>
                    <Button theme='text'>普通按钮</Button>
                    <Button theme='text' size='small'>小小按钮</Button>
                </div>
            </main>
        </section>

        <section>
            <h2>支持level</h2>
            <main className='main'>
                <div className='content'>
                    <Button level='main'>主要按钮</Button>
                    <Button>普通按钮</Button>
                    <Button level='danger'>危险按钮</Button>
                </div>
                <div className='content'>
                    <Button theme='link' level='main'>主要链接按钮</Button>
                    <Button theme='link'>普通链接按钮</Button>
                    <Button theme='link' level='danger'>危险链接按钮</Button>
                </div>
                <div className='content'>
                    <Button theme='text' level='main'>主要文字按钮</Button>
                    <Button theme='text'>普通文字按钮</Button>
                    <Button theme='text' level='danger'>危险文字按钮</Button>
                </div>
            </main>
        </section>
    </div>
  );
};

export default ButtonExample;