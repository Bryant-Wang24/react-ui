import { scopedClassMaker } from '../helpers/classes'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLElement>{}
const sc = scopedClassMaker('gu-layout')
const Footer: React.FC<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('footer',{extra:className})} {...rest}>{props.children}</div>
    )
}
export default Footer;
