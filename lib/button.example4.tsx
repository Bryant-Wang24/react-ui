import React from 'react';
import Button from "./button";

const ButtonExample4: React.FunctionComponent = () => {
    return (
        <>
            <Button disabled={true}>常规按钮</Button>
            <Button disabled={true} theme='link'>链接按钮</Button>
            <Button disabled={true} theme='text'>文本按钮</Button>
        </>
    );
};

export default ButtonExample4;