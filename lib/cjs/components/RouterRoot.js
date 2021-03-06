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
var RouterOutlet_1 = __importDefault(require("./RouterOutlet"));
var RouterProvider_1 = require("./RouterProvider");
var RouterRoot = function () {
    var routerOutletProps = react_1.useContext(RouterProvider_1.RouterOutletContext);
    return jsx_runtime_1.jsx(RouterOutlet_1.default, __assign({}, routerOutletProps), void 0);
};
exports.default = RouterRoot;
