import React from 'react';
import Button from "./button";

const ButtonExample3: React.FunctionComponent = () => {
    return (
        <>
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
        </>
    );
};

export default ButtonExample3;