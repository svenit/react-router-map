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
exports.RouterOutletContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var history_1 = require("history");
var react_1 = require("react");
var Navigator_1 = __importDefault(require("../helpers/Navigator"));
var history = history_1.createBrowserHistory();
exports.RouterOutletContext = react_1.createContext({});
var RouterProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    props.routes && Navigator_1.default.make(props.routes, history);
    return (jsx_runtime_1.jsx(react_router_dom_1.Router, __assign({ history: history }, { children: jsx_runtime_1.jsx(exports.RouterOutletContext.Provider, __assign({ value: props }, { children: children }), void 0) }), void 0));
};
exports.default = RouterProvider;
