import './dialog.scss'
import React, {Fragment, ReactElement, ReactNode} from 'react';
import {Icon} from '../index';
import ReactDOM from 'react-dom';
import {scopedClassMaker} from "../helpers/classes";
import Button from "../button/button";
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
  const result = props.visible &&
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}>
      </div>
      <div className={sc('')}>
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
  return (
    ReactDOM.createPortal(result, document.body)
  );
}
Dialog.defaultProps = {
  closeOnClickMask:false
}

const modal = (content:ReactNode,buttons?:Array<ReactElement>,afterClose?: () => void)=>{
  const close = ()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)//隐藏掉这个组件
    ReactDOM.unmountComponentAtNode(div)//卸载被隐藏的组件
    div.remove()//删除组件
  }
  const component = <Dialog visible={true} buttons={buttons} onClose={()=>{
   close()
    afterClose&&afterClose()
  }}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
  return close
}

const alert = (content:string)=>{
 const button = <Button level='main' onClick={()=>close()}>确认</Button>
  const close = modal(content,[button])
}
const confirm = (content:string,yes?:()=>void,no?:()=>void)=>{

  const onYes = ()=>{
    close()
    yes&&yes()
  }
  const onNo = ()=>{
    close()
    no&&no()
  }
  const buttons =[
    <Button level='main' onClick={onYes}>确认</Button>,
    <Button onClick={onNo}>取消</Button>
  ]
  const close = modal(content,buttons,no)
}

export {alert,confirm,modal}

export default Dialog
