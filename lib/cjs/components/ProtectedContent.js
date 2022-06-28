"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var config_1 = require("../config");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var RouterOutlet_1 = __importDefault(require("./RouterOutlet"));
var MatchRouteRedirect = react_1.memo(function (_a) {
    var to = _a.to;
    var match = react_router_dom_1.useRouteMatch();
    var redirectToRoute = react_1.useMemo(function () { return react_router_dom_1.generatePath(to, match.params); }, [match, to]);
    return jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: redirectToRoute }, void 0);
});
var ProtectedContent = react_1.memo(function (_a) {
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
            return jsx_runtime_1.jsx(config_1.fallbackComponents.CantActivateFallback, {}, void 0);
        }
    }
    if (typeof route.absoluteRedirectTo === "string" || typeof route.redirectTo === "string") {
        return jsx_runtime_1.jsx(MatchRouteRedirect, { to: (_b = route.absoluteRedirectTo) !== null && _b !== void 0 ? _b : route.redirectTo }, void 0);
    }
    var result = [];
    if (route.component) {
        result.push(
        // @ts-ignore
        jsx_runtime_1.jsx(react_1.Suspense, __assign({ fallback: jsx_runtime_1.jsx(config_1.fallbackComponents.SuspenseFallback, {}, void 0) }, { children: jsx_runtime_1.jsx(route.component, __assign({}, props, { 
                // @ts-ignore
                parentRoute: route, routes: route.children, relativeMode: relativeMode }), void 0) }), 0));
    }
    else if ((_c = route.children) === null || _c === void 0 ? void 0 : _c.length) {
        result.push(jsx_runtime_1.jsx(RouterOutlet_1.default, { routes: route.children, parentRoute: route, relativeMode: relativeMode }, 1));
    }
    return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: result }, void 0);
});
exports.default = ProtectedContent;
