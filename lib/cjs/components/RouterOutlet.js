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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ProtectedContent_1 = __importDefault(require("./ProtectedContent"));
var utils_1 = require("../utils");
var config_1 = require("../config");
var Navigator_1 = __importDefault(require("../helpers/Navigator"));
var RouterOutlet = react_1.memo(function (_a) {
    var routes = _a.routes, parentRoute = _a.parentRoute, relativeMode = _a.relativeMode;
    var history = react_router_dom_1.useHistory();
    /**
     * Initialize navigator helper
     */
    routes && new Navigator_1.default(routes, history);
    var resolvedRoutes = react_1.useMemo(function () {
        var _a;
        var result = (_a = routes === null || routes === void 0 ? void 0 : routes.map(function (route) { return utils_1.resolveRoute(route, parentRoute, relativeMode); })) !== null && _a !== void 0 ? _a : [];
        if (config_1.extraRoutes.matchAllRoute) {
            var resolvedMatchAllRoute = utils_1.resolveRoute(config_1.extraRoutes.matchAllRoute, parentRoute, relativeMode);
            var lastRoute = result === null || result === void 0 ? void 0 : result[result.length - 1];
            if (!!resolvedMatchAllRoute.exact !== !!(lastRoute === null || lastRoute === void 0 ? void 0 : lastRoute.exact) ||
                resolvedMatchAllRoute.absolutePath !== (lastRoute === null || lastRoute === void 0 ? void 0 : lastRoute.absolutePath)) {
                result.push(resolvedMatchAllRoute);
            }
        }
        return result;
    }, [routes]);
    return (jsx_runtime_1.jsx(react_router_dom_1.Switch, { children: resolvedRoutes === null || resolvedRoutes === void 0 ? void 0 : resolvedRoutes.map(function (route) { return (jsx_runtime_1.jsx(react_router_dom_1.Route, { path: route.absolutePath, exact: route.exact, render: function (props) { return jsx_runtime_1.jsx(ProtectedContent_1.default, __assign({ route: route, relativeMode: relativeMode }, props), void 0); } }, route.absolutePath)); }) }, void 0));
});
exports.default = RouterOutlet;
