import React from 'react';
import Button from "./button";

const ButtonExample2: React.FunctionComponent = () => {
    return (
        <>
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
        </>
    );
};

export default ButtonExample2;