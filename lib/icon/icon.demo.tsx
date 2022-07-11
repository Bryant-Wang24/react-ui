import IconExample from './icon.example';
import React from 'react';
import Demo from '../../demo';

const IconDemo = () => {
    return (
        <div className='icon-example'>
            <h1>Icon示例</h1>
            <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
                <main>
                    <IconExample/>
                </main>
                <div className='explain'>
                    通过 name 属性来指定需要使用的图标
                </div>
            </Demo>
        </div>
    );
};

export default IconDemo;