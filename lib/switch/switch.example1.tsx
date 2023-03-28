import React from 'react';
import Switch from './switch';

const SwitchExample1: React.FunctionComponent = () => {
    const [checked, setChecked] = React.useState(false);
    return (
            <Switch
                checked={checked}
                onChange={setChecked}
            />
    );
};

export default SwitchExample1;