/// <reference types="react" />
import { LinkProps } from "react-router-dom";
interface WithParamsLinkProps extends Omit<LinkProps, "to"> {
    to: LinkProps["to"] | string[];
}
declare const RelativeLink: import("react").MemoExoticComponent<({ to, ...props }: WithParamsLinkProps) => JSX.Element>;
export default RelativeLink;
