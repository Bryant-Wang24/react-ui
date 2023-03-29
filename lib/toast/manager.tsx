import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { ToastOptions } from './type'
import { Piece } from './piece'
import { duration } from './transition'

let seed = 0
const now = Date.now()
const getUUID = () => `${now}_${seed++}`

type Dough = Required<ToastOptions> & {
  key: string
}
interface State {
  oven: Dough[]
}
const ManagerWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  z-index: 2147483647;
`
class ToastManager extends React.Component<unknown, State> {
  public state: State = {
    oven: [],
  }
  public add(options: Required<ToastOptions>) {
    const key = getUUID()
    this.setState(prevState => ({ oven: [...prevState.oven, { ...options, key }] }))
    return key
  }
  public remove(key: string) {
    this.setState(prevState => ({ oven: prevState.oven.filter(item => item.key !== key) }))
  }
  public removeAll() {
    this.setState({ oven: [] })
  }
  render() {
    return (
      <ManagerWrapper>
        <TransitionGroup component={null}>
          {this.state.oven.map(item => (
            <CSSTransition key={item.key} timeout={duration.standard} classNames='toast'>
              <Piece
                type={item.type}
                key={item.key}
                duration={item.duration}
                onClose={() => this.remove(item.key)}
              >
                {item.content}
              </Piece>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ManagerWrapper>
    )
  }
}

export default ToastManager