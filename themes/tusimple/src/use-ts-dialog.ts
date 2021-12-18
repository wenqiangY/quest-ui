import {
  useDialog as _useDialog,
  DialogOptions,
  DialogReactive,
  DialogApi
} from 'novice-ui'
import { icons } from './icons'

export interface ExtendedApi {
  danger: (options: DialogOptions) => DialogReactive
}

export type TsDialogApi = DialogApi & ExtendedApi

function useDialog (): TsDialogApi {
  const dialog = _useDialog()
  const extendedApi: ExtendedApi = {
    danger: (options: DialogOptions) => {
      return dialog.error({
        ...options,
        icon: icons.warning,
        type: 'error'
      })
    }
  }
  return Object.assign(extendedApi, dialog)
}

export { useDialog }