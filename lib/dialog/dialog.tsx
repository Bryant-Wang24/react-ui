import { scopedClassMaker } from '../classes';
import './dialog.scss'
import React, {Fragment, ReactElement} from 'react';
import {Icon} from '../index';
interface Props{
  visible:Boolean,
  onClose:React.MouseEventHandler,
  buttons:Array<ReactElement>
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;
const Dialog:React.FC<Props> = (props)=>{
  const onClickClose:React.MouseEventHandler = (e)=>{
    props.onClose(e)
  }
  return(
    props.visible?
      <Fragment>
        <div className={sc('mask')} >
        </div>
        <div className={sc()}>
          <div className={sc('close')} onClick={onClickClose} >
            <Icon name="close"/>
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            {props.buttons}
            {/*<button onClick={onClickClose}>ok</button>*/}
            {/*<button onClick={onClickClose}>cancel</button>*/}
          </footer>
        </div>
      </Fragment>
      :null
  )
}
export default Dialog