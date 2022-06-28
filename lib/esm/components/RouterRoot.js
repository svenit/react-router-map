var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import RouterOutlet from "./RouterOutlet";
import { RouterOutletContext } from "./RouterProvider";
var RouterRoot = function () {
    var routerOutletProps = useContext(RouterOutletContext);
    return _jsx(RouterOutlet, __assign({}, routerOutletProps), void 0);
};
export default RouterRoot;
