import React from 'react'
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('gu-layout')
const Footer: React.FC = () => {
    return (
        <div className={sc()}>Footer</div>
    )
}
export default Footer;
