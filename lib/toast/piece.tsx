import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { transition, duration } from './transition'
import { ToastType } from './type'

export const StyledPiece = styled.div`
  color: white;
  height: 38px;
  padding: 0 1em;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  touch-action: none;
  border-radius: 4px;
  transition: ${transition('all', duration.enteringScreen)};
  &.toast-enter {
    transform: translateY(-100%);
    opacity: 0;
  }
  &.toast-enter-active,
  &.toast-enter-done {
    transform: translateY(102%);
    opacity: 1;
  }
  &.toast-exit {
    transform: translateY(102%);
    opacity: 1;
  }
  &.toast-exit-active,
  &.toast-exit-done {
    transform: translateY(-100%);
    opacity: 0;
    transition: ${transition('all', duration.leavingScreen)};
  }
  &.success {
    color: white;
    background-color: ${p => p.theme.color.success};
  }
  &.info {
    color: white;
    background-color: ${p => p.theme.color.info};
  }
  &.warning {
    color: white;
    background-color: ${p => p.theme.color.warning};
  }
  &.error {
    color: white;
    background-color: ${p => p.theme.color.error};
  }
`
export const Piece = (props: {
  type: ToastType
  duration: number
  children: React.ReactNode
  onClose: () => void
}) => {
  const { duration, children, onClose, type } = props
  const timerRef = useRef<number>()
  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      onClose()
    }, duration)
    return () => {
      window.clearTimeout(timerRef.current)
    }
  }, [duration, onClose])

  return <StyledPiece className={type}>{children}</StyledPiece>
}
