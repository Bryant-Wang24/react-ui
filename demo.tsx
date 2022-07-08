import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import {useState} from 'react';
import Button from "./lib/button";
import "./demo.scss"

interface Props {
    code: string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const code = (
        <Highlight {...defaultProps} theme={theme} code={props.code} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
            )}
        </Highlight>
    );
    return (
        <div className='type-section'>
            <div className="example">
                {props.children}
            </div>
            <div className='explain'>
                按钮有三种类型：常规按钮、链接按钮、文本按钮。
            </div>
            <div className='code'>
                <Button onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
                {codeVisible && code}
            </div>
        </div>
    )
};

export default Demo;