import React from 'react'
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('gu-layout')
const Content: React.FC = () => {
    return (
        <div className={sc('content')}>Content</div>
    )
}
export default Content;
