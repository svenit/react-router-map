/// <reference types="react" />
import { WithRouteProps } from "../define";
export interface ProtectedContentProps extends WithRouteProps {
    relativeMode?: boolean;
}
declare const ProtectedContent: import("react").MemoExoticComponent<({ route, relativeMode, ...props }: ProtectedContentProps) => JSX.Element>;
export default ProtectedContent;
