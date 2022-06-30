import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./guards/AuthProvider";
import reactHookGuard from "react-hook-guard";
import Spin from "./components/Spin";
import AccessDenied from "./components/AccessDenied";
import NotFound from "./components/NotFound";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

reactHookGuard.config({
  SuspenseFallback: Spin,
  CantActivateFallback: AccessDenied,
  matchAllRoute: {
    path: "",
    component: NotFound,
  },
});

export const browserHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={browserHistory}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
