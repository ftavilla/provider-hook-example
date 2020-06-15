import * as React from "react";
import "./styles.css";
import { SnackBarProvider } from "./components/Snackbar/SnackbarProvider";
import { useSnackBar } from "./components/Snackbar";
import { AlertSeverity } from "./components/Snackbar/Alert";

export const CustomComponent: React.FunctionComponent = () => {
  const { showMessage } = useSnackBar();

  return (
    <button onClick={() => showMessage("ALERT!", AlertSeverity.ERROR)}>
      Alert!
    </button>
  );
};
export default function App() {
  return (
    <SnackBarProvider>
      <CustomComponent />
    </SnackBarProvider>
  );
}
