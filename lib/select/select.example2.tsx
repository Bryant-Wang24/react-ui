import React from 'react';
import Select from './select';

const SelectExample1: React.FunctionComponent = () => {
    const [value, setValue] = React.useState(1);
    const starList = [
        { value: 1, label: '迪丽热巴' },
        { value: 2, label: '古力娜扎' },
        { value: 3, label: '马尔扎哈' },
    ]
    return (
        <Select
            style={{ width: '250px' }}
            value={value}
            disabled={true}
            onChange={(value:number)=>{
                setValue(value);
            }}
        >
            {
                starList.map((item, index) => {
                    return (
                        <Select.Option key={index} value={item.value}>{item.label}</Select.Option>
                    )
                })
            }
        </Select>
    );
};

export default SelectExample1;