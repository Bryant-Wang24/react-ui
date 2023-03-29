import Button from '../button/button';
import React from 'react';
import Toast from './toast';

const SwitchExample1: React.FunctionComponent = () => {
    const handleInfo = () => {
        Toast.info('正常提示');
    }
    const handleSuccess = () => {
        Toast.success('成功提示');
    }
    const handleWarning = () => {
        Toast.warning('警告提示');
    }
    const handleError = () => {
        Toast.error('错误提示');
    }
    return (
        <>
         <Button level='main' onClick={handleInfo}>正常提示</Button>
         <Button level='main' onClick={handleSuccess}>成功提示</Button>
         <Button level='main' onClick={handleWarning}>警告提示</Button>
         <Button level='main' onClick={handleError}>错误提示</Button>
        </>
           
            
    );
};

export default SwitchExample1;