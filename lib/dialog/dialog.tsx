import { scopedClassMaker } from '../classes';
import './dialog.scss'
import React, { Fragment } from 'react';
import {Icon} from '../index';
interface Props{
  visible:Boolean
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;
const Dialog:React.FC<Props> = (props)=>{
  return(
    props.visible?
      <Fragment>
        <div className={sc('mask')} >
        </div>
        <div className={sc()}>
          <div className={sc('close')} >
            <Icon name="close"/>
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment>
      :null
  )
}
export default Dialog