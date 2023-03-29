import React from 'react';
import Switch from './switch';

const SwitchExample1: React.FunctionComponent = () => {
    const [checked1,setChecked1] = React.useState(false);
    const [checked2,setChecked2] = React.useState(true);
    const [checked3,setChecked3] = React.useState(false);
    return (
        <>
            <Switch
                checked={checked1}
                onChange={setChecked1}
                size='small'
                style={{margin:'0 10px'}}
            />
            <Switch
                checked={checked2}
                onChange={setChecked2}
                style={{margin:'0 10px'}}
            />
            <Switch
                checked={checked3}
                onChange={setChecked3}
                size='large'
                style={{margin:'0 10px'}}
            />
        </>
    );
};

export default SwitchExample1;