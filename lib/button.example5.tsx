import React from 'react';
import Button from "./button";

const ButtonExample5: React.FunctionComponent = () => {
    return (
        <>
            <Button loading={true}>加载中</Button>
            <Button>加载完毕</Button>
        </>
    );
};

export default ButtonExample5;