import {useContext} from 'react'
import {SnackbarContext, SnackbarProviderValue} from './SnackbarContext'

export const useSnackBar = (): SnackbarProviderValue => {
  const context = useContext(SnackbarContext)
  if (context === undefined) {
    throw new Error('useSnackBar must be used within a SnackbarProvider')
  }
  return context
}
