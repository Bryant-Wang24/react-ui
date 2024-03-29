import React from 'react';
import Switch from './switch';

const SwitchExample1: React.FunctionComponent = () => {
    const [checked] = React.useState(true);
    return (
            <Switch
                checked={checked}
                disabled={true}
            />
    );
};

export default SwitchExample1;