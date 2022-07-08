import React from 'react';
import Button from "./button";
import "./button.scss"

const ButtonExample1: React.FunctionComponent = () => {
    return (
        <>
            <Button>常规按钮</Button>
            <Button theme='link'>链接按钮</Button>
            <Button theme='text'>文本按钮</Button>
        </>
    );
};

export default ButtonExample1;