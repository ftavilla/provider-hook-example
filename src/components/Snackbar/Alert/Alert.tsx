import React from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export enum AlertSeverity {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success"
}

export const Alert: React.FunctionComponent<AlertProps> = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
