import React, { useState } from "react";
import { SnackbarContext, SnackbarProviderValue } from "./SnackbarContext";
import { SnackBar } from "./Snackbar";
import { AlertSeverity } from "./Alert";

interface AlertState {
  open?: boolean;
  message?: string;
  severity?: AlertSeverity;
}

export const SnackBarProvider: React.FunctionComponent<AlertState> = props => {
  const [alert, setAlert] = useState({} as AlertState);
  const { children } = props;

  const showMessage = (message: string, severity: AlertSeverity) => {
    setAlert({ open: true, message, severity });
  };

  const contextValue: SnackbarProviderValue = {
    showMessage: showMessage
  };

  const handleClose = () => {
    setAlert({ open: false, severity: AlertSeverity.INFO });
  };

  return (
    <>
      <SnackbarContext.Provider value={contextValue}>
        {children}
      </SnackbarContext.Provider>
      <SnackBar
        open={alert.open}
        message={alert.message}
        handleClose={handleClose}
        autoHideDuration={6000}
        severity={alert.severity}
      />
    </>
  );
};
