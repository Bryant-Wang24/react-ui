import { scopedClassMaker } from '../classes';
import './dialog.scss'
import React, {Fragment, ReactElement} from 'react';
import {Icon} from '../index';
import ReactDOM from 'react-dom';
interface Props{
  visible:Boolean,
  onClose:React.MouseEventHandler,
  buttons?:Array<ReactElement>,
  closeOnClickMask?:Boolean
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;
const Dialog:React.FC<Props> = (props)=>{
  const onClickClose:React.MouseEventHandler = (e)=>{
    props.onClose(e)
  }
  const onClickMask:React.MouseEventHandler = (e)=>{
    if (props.closeOnClickMask){
      props.onClose(e)
    }
  }
  const x = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
      </div>
    </Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(x, document.body)
  );
}
export default Dialog