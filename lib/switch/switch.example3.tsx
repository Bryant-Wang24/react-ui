import React from 'react';
import Switch from './switch';

const SwitchExample1: React.FunctionComponent = () => {
    const [checked,setChecked] = React.useState(false);
    return (
            <Switch
                checked={checked}
                onChange={setChecked}
                text={{openText:'开',closeText:'关'}}
            />
    );
};

export default SwitchExample1;