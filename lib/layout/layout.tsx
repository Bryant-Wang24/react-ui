import React from 'react'
import {scopedClassMaker} from "../classes";
import './layout.scss'

const  sc = scopedClassMaker('gu-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Layout: React.FC<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={[sc('',{extra:className})].join(' ')} {...rest}>
            {props.children}
        </div>
    )
}
export default Layout;
