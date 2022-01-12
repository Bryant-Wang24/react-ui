import React from 'react'
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('gu-layout')

const Header: React.FC = () => {
    return (
        <div className={sc('header')}>Header</div>
    )
}
export default Header;
