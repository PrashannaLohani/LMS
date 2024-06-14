import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { UserInfoProvider } from "./Context/UserInfo.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCF0E6",
      text: "#FFFFFF",
    },
    secondary: {
      main: "#EF6C00",
      text: "#283593",
    },
    form: {
      main: "#000000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
