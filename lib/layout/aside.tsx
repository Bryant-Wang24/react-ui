import { scopedClassMaker } from '../helpers/classes'
import React from 'react'


interface Props extends React.HTMLAttributes<HTMLElement>{}

const sc = scopedClassMaker('gu-layout')
const Aside: React.FC<Props> = (props) => {
    const {className,...rest}=props
    return (
        <div className={sc('aside',{extra:className})} {...rest}>Aside</div>
    )
}
export default Aside;
