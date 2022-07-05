import React from 'react';
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className='buttonExample'>
      <h1>Button示例</h1>
      <section>
        <h2>常规使用</h2>
        <Button type='default'>123</Button>
        <Button type='primary'>按钮</Button>
      </section>

    </div>
  );
};

export default ButtonExample;