import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createContext, PropsWithChildren } from "react";
import { RouterOutletProps } from "./RouterOutlet";
import Navigator from "../helpers/Navigator";

const history = createBrowserHistory();

export const RouterOutletContext = createContext<RouterOutletProps>({});

const RouterProvider = ({ children, ...props }: PropsWithChildren<RouterOutletProps>) => {
  props.routes && Navigator.make(props.routes, history);
  return (
    <Router history={history}>
        <RouterOutletContext.Provider value={props}>
            {children}
        </RouterOutletContext.Provider>
    </Router>
  );
};

export default RouterProvider;
