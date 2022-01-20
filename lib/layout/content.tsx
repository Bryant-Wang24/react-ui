import React from 'react'
import {scopedClassMaker} from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const sc = scopedClassMaker('gu-layout')
const Content: React.FC<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('content',{extra:className})} {...rest}>Content</div>
    )
}
export default Content;
