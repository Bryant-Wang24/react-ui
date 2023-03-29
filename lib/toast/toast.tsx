
import React from "react"
import ReactDOM from "react-dom"
import  ToastManager  from "./manager"
import { ToastOptions } from "./type"
import { MyThemeProvider } from "./theme"
 class Toast {
    public static container: HTMLDivElement | null
    public static toastManager: ToastManager | null
    public static success(content: React.ReactNode, duration?: number) {
      this.notify({
        type: 'success',
        content,
        duration,
      })
    }
    public static info(content: React.ReactNode, duration?: number) {
      this.notify({
        type: 'info',
        content,
        duration,
      })
    }
    public static warning(content: React.ReactNode, duration?: number) {
      this.notify({
        type: 'warning',
        content,
        duration,
      })
    }
    public static error(content: React.ReactNode, duration?: number) {
      this.notify({
        type: 'error',
        content,
        duration,
      })
    }
    public static notify(options: ToastOptions) {
      const { type, content, duration = 3000 } = options
      this.getToastManager().then(manager => {
        manager.add({
          type,
          content,
          duration,
        })
      })
    }
    public static destroy() {
      if (this.container) {
        ReactDOM.unmountComponentAtNode(this.container)
        if (this.container.parentNode) {
          this.container.parentNode.removeChild(this.container)
        }
        this.container = null
        this.toastManager = null
      }
    }
    /**
     * @deprecated 如果想在弹一条消息前清除之前所有消息, 请使用`toast.destroy()`. 因为单独地清空所有state, 过渡效果会闪烁
     */
    public static removeAll() {
      return this.getToastManager().then(manager => {
        manager.removeAll()
      })
    }
    private static async getToastManager() {
      if (!this.toastManager) {
        this.toastManager = await this.initToastManager()
      }
      return this.toastManager
    }
    private static initToastManager() {
      if (typeof window === 'undefined') {
        throw new Error('Toast only can instantiation on browser')
      }
      return new Promise<ToastManager>((resolve, reject) => {
        const saveRef = (current: ToastManager) => {
          resolve(current)
        }
        ReactDOM.render(
          <MyThemeProvider>
            <ToastManager ref={saveRef} />
          </MyThemeProvider>,
          this.getContainer()
        )
      })
    }
    private static getContainer() {
      if (!this.container) {
        const container = document.createElement('div')
        document.body.appendChild(container)
        this.container = container
      }
      return this.container
    }
  }

export default Toast