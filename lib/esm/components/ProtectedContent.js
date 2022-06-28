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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { fallbackComponents } from "../config";
import { Redirect, useRouteMatch, generatePath } from "react-router-dom";
import { memo, Suspense, useMemo } from "react";
import RouterOutlet from "./RouterOutlet";
var MatchRouteRedirect = memo(function (_a) {
    var to = _a.to;
    var match = useRouteMatch();
    var redirectToRoute = useMemo(function () { return generatePath(to, match.params); }, [match, to]);
    return _jsx(Redirect, { to: redirectToRoute }, void 0);
});
var ProtectedContent = memo(function (_a) {
    var _b, _c;
    var route = _a.route, relativeMode = _a.relativeMode, props = __rest(_a, ["route", "relativeMode"]);
    if (route.canActivate) {
        var active = true;
        for (var _i = 0, _d = route.canActivate; _i < _d.length; _i++) {
            var activate = _d[_i];
            if (!activate(route)) {
                active = false;
            }
        }
        if (!active) {
            // @ts-ignore
            return _jsx(fallbackComponents.CantActivateFallback, {}, void 0);
        }
    }
    if (typeof route.absoluteRedirectTo === "string" || typeof route.redirectTo === "string") {
        return _jsx(MatchRouteRedirect, { to: (_b = route.absoluteRedirectTo) !== null && _b !== void 0 ? _b : route.redirectTo }, void 0);
    }
    var result = [];
    if (route.component) {
        result.push(
        // @ts-ignore
        _jsx(Suspense, __assign({ fallback: _jsx(fallbackComponents.SuspenseFallback, {}, void 0) }, { children: _jsx(route.component, __assign({}, props, { 
                // @ts-ignore
                parentRoute: route, routes: route.children, relativeMode: relativeMode }), void 0) }), 0));
    }
    else if ((_c = route.children) === null || _c === void 0 ? void 0 : _c.length) {
        result.push(_jsx(RouterOutlet, { routes: route.children, parentRoute: route, relativeMode: relativeMode }, 1));
    }
    return _jsx(_Fragment, { children: result }, void 0);
});
export default ProtectedContent;
