import IconExample from './icon.example';
import React from 'react';
import Demo from '../../demo';

const IconDemo = () => {
    return (
        <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
            <IconExample/>
            <div className='explain'>
                通过 name 属性来指定需要使用的图标
            </div>
        </Demo>
    );
};

export default IconDemo;