import { PropsWithChildren } from "react";
import { RouterOutletProps } from "./RouterOutlet";
export declare const RouterOutletContext: import("react").Context<RouterOutletProps>;
declare const RouterProvider: ({ children, ...props }: PropsWithChildren<RouterOutletProps>) => JSX.Element;
export default RouterProvider;
