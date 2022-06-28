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
import { memo, useMemo } from "react";
import { Route as RouteComponent, Switch } from "react-router-dom";
import ProtectedContent from "./ProtectedContent";
import { resolveRoute } from "../utils";
import { extraRoutes } from "../config";
var RouterOutlet = memo(function (_a) {
    var routes = _a.routes, parentRoute = _a.parentRoute, relativeMode = _a.relativeMode;
    var resolvedRoutes = useMemo(function () {
        var _a;
        var result = (_a = routes === null || routes === void 0 ? void 0 : routes.map(function (route) { return resolveRoute(route, parentRoute, relativeMode); })) !== null && _a !== void 0 ? _a : [];
        if (extraRoutes.matchAllRoute) {
            var resolvedMatchAllRoute = resolveRoute(extraRoutes.matchAllRoute, parentRoute, relativeMode);
            var lastRoute = result === null || result === void 0 ? void 0 : result[result.length - 1];
            if (!!resolvedMatchAllRoute.exact !== !!(lastRoute === null || lastRoute === void 0 ? void 0 : lastRoute.exact) ||
                resolvedMatchAllRoute.absolutePath !== (lastRoute === null || lastRoute === void 0 ? void 0 : lastRoute.absolutePath)) {
                result.push(resolvedMatchAllRoute);
            }
        }
        return result;
    }, [routes]);
    return (_jsx(Switch, { children: resolvedRoutes === null || resolvedRoutes === void 0 ? void 0 : resolvedRoutes.map(function (route) { return (_jsx(RouteComponent, { path: route.absolutePath, exact: route.exact, render: function (props) { return _jsx(ProtectedContent, __assign({ route: route, relativeMode: relativeMode }, props), void 0); } }, route.absolutePath)); }) }, void 0));
});
export default RouterOutlet;
