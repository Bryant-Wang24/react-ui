import Button from '../button/button';
import React from 'react';
import Toast from './toast';

const ToastExample1: React.FunctionComponent = () => {
    const handleSuccess = (content:string,duration:number) => {
        Toast.success(content,duration);
    }
    return (
        <>
         <Button level='main' onClick={()=>handleSuccess('支持duration',1000)}>支持duration</Button>
        </>
    );
};

export default ToastExample1;