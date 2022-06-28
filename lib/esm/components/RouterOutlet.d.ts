/// <reference types="react" />
import { Route, WithRoutesProps } from "../define";
export interface RouterOutletProps extends WithRoutesProps {
    parentRoute?: Route;
    relativeMode?: boolean;
}
declare const RouterOutlet: import("react").MemoExoticComponent<({ routes, parentRoute, relativeMode }: RouterOutletProps) => JSX.Element>;
export default RouterOutlet;
