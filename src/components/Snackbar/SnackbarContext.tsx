import React from 'react'
import {AlertSeverity} from './Alert'

export interface SnackbarProviderValue {
  /**
   * Display a message with this snackbar.
   * @param {string} message message to display
   * @param {AlertSeverity} [severity] message severity
   */
  showMessage(message: string, severity: AlertSeverity): void
}

export const SnackbarContext = React.createContext<
  SnackbarProviderValue | undefined
>(undefined)
