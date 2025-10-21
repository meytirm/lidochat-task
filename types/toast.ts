import type { BaseColorVariant } from 'bootstrap-vue-next'

export type ToastOptions = {
  title: string
  body: string
  variant: keyof BaseColorVariant | null | undefined
}
