import React from 'react'
import {scopedClassMaker} from "../classes";

const  sc = scopedClassMaker('gu-layout')

const Layout: React.FC = (props) => {
    return (
        <div className={sc()}>
            {props.children}
        </div>
    )
}
export default Layout;
