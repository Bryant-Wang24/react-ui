import React, {CSSProperties} from 'react'
import {scopedClassMaker} from "../classes";
import './layout.scss'

const  sc = scopedClassMaker('gu-layout')

interface Props{
    style:CSSProperties,
    className:string
}
const Layout: React.FC<Props> = (props) => {
    console.log('props',props)
    const {className,...rest} = props
    console.log('...rest',rest)
    return (
        <div className={[sc('',{extra:className})].join(' ')} {...rest}>
            {props.children}
        </div>
    )
}
export default Layout;
