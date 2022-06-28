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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var utils_1 = require("../utils");
var path_browserify_1 = require("path-browserify");
var RelativeLink = react_1.memo(function (_a) {
    var to = _a.to, props = __rest(_a, ["to"]);
    var rest = props;
    var _b = react_router_dom_1.useRouteMatch(), path = _b.path, params = _b.params;
    var realTo = react_1.useMemo(function () {
        var rawTo;
        if (to instanceof Array) {
            var resolved = path_browserify_1.join.apply(void 0, to);
            if (path_browserify_1.isAbsolute(resolved)) {
                rawTo = resolved;
            }
            else {
                rawTo = path_browserify_1.join.apply(void 0, __spreadArray([path], to));
            }
        }
        else if (typeof to === "string") {
            if (path_browserify_1.isAbsolute(to) || to.startsWith("https://") || to.startsWith("http://")) {
                rawTo = utils_1.normalizeUrl(to);
            }
            else {
                rawTo = utils_1.normalizeUrl(path + "/" + to);
            }
        }
        else {
            rawTo = to;
        }
        return typeof rawTo !== "string" ? rawTo : react_router_dom_1.generatePath(rawTo, params);
    }, [to, path, params]);
    return jsx_runtime_1.jsx(react_router_dom_1.Link, __assign({ to: realTo }, rest), void 0);
});
exports.default = RelativeLink;
