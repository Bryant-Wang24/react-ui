import React, {ReactElement} from 'react'
import {scopedClassMaker} from "../classes";
import './layout.scss'
import Aside from "./aside";

const  sc = scopedClassMaker('gu-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
    children:ReactElement|Array<ReactElement>
}
const Layout: React.FC<Props> = (props) => {
    const {className,...rest} = props
    const children = props.children as Array<ReactElement>
    const hasAside ='length' in children && children.some((item)=>{
        return item.type===Aside
    })
    return (
        <div className={sc({'':true,hasAside},{extra:[className,hasAside&&'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
}
export default Layout;
