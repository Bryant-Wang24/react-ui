export type ToastType = 'error' | 'warning' | 'info' | 'success'
export interface ToastOptions {
  type: ToastType
  content: React.ReactNode
  duration?: number
}
