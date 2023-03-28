import React from 'react';
import Switch from './switch';

const SwitchExample1: React.FunctionComponent = () => {
    const [checked] = React.useState(false);
    return (
        <div style={{marginBottom:'10px',marginLeft:'10px'}}>
            <Switch
                checked={checked}
                disabled={true}
            />
        </div>
    );
};

export default SwitchExample1;