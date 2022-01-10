import { scopedClassMaker } from '../classes';
import './dialog.scss'
import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
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
Dialog.defaultProps = {
  closeOnClickMask:false
}
const alert = (content:string)=>{
  const close = ()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)//隐藏掉这个组件
    ReactDOM.unmountComponentAtNode(div)//卸载被隐藏的组件
    div.remove()//删除组件
  }
  const component = <Dialog visible={true} buttons={[<button onClick={close}>yes</button>]} onClose={()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
    ReactDOM.unmountComponentAtNode(div)
  }}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
}
const confirm = (content:string,yes?:()=>void,no?:()=>void)=>{
  const onYes = ()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)//隐藏掉这个组件
    ReactDOM.unmountComponentAtNode(div)//卸载被隐藏的组件
    div.remove()//删除组件
    yes&&yes()
  }
  const onNo = ()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)//隐藏掉这个组件
    ReactDOM.unmountComponentAtNode(div)//卸载被隐藏的组件
    div.remove()//删除组件
    no&&no()
  }
  const component = <Dialog visible={true} onClose={onNo} buttons={[
      <button onClick={onYes}>yes</button>,
      <button onClick={onNo}>no</button>
  ]}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component,div)
}

const modal = (content:ReactNode |ReactFragment,buttons?:Array<ReactElement>,afterClose?:()=>void)=>{
  const close = ()=>{
    ReactDOM.render(React.cloneElement(component,{visible:false}),div)//隐藏掉这个组件
    ReactDOM.unmountComponentAtNode(div)//卸载被隐藏的组件
    div.remove()//删除组件
  }
  const component = <Dialog visible={true} onClose={()=>{
    close()
    afterClose&&afterClose()
  }} >{content}</Dialog>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component,div)
  return close;
}
export {alert,confirm,modal}

export default Dialog
