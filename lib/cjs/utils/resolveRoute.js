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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolveRoute = function (route, parentRoute, relativeMode) {
    var _a, _b, _c, _d, _e, _f;
    if (relativeMode === void 0) { relativeMode = false; }
    var resolvedRoute = __assign({}, route);
    if (relativeMode) {
        var commands = __spreadArray(__spreadArray([], ((_a = parentRoute === null || parentRoute === void 0 ? void 0 : parentRoute.commands) !== null && _a !== void 0 ? _a : [])), [route.path]).filter(function (command) { return !!command; });
        resolvedRoute.commands = commands;
        resolvedRoute.absolutePath = "/" + commands.join("/");
        if (typeof route.redirectTo === "string") {
            var redirectToCommands = __spreadArray(__spreadArray([], ((_b = parentRoute === null || parentRoute === void 0 ? void 0 : parentRoute.commands) !== null && _b !== void 0 ? _b : [])), [route.redirectTo]).filter(function (command) { return !!command; });
            resolvedRoute.absoluteRedirectTo = "/" + redirectToCommands.join("/");
        }
    }
    else {
        resolvedRoute.absolutePath = route.path;
        resolvedRoute.absoluteRedirectTo = resolvedRoute.redirectTo;
    }
    if (parentRoute) {
        resolvedRoute.canActivate = __spreadArray(__spreadArray([], ((_c = parentRoute.canActivateChild) !== null && _c !== void 0 ? _c : [])), ((_d = route.canActivate) !== null && _d !== void 0 ? _d : []));
        var activateChild = __spreadArray(__spreadArray([], ((_e = parentRoute.canActivateChild) !== null && _e !== void 0 ? _e : [])), ((_f = route.canActivateChild) !== null && _f !== void 0 ? _f : []));
        var duplicatedActivateChild = new Set();
        var canActivateChild = [];
        for (var _i = 0, activateChild_1 = activateChild; _i < activateChild_1.length; _i++) {
            var activate = activateChild_1[_i];
            if (!duplicatedActivateChild.has(activate)) {
                canActivateChild.push(activate);
                duplicatedActivateChild.add(activate);
            }
        }
        resolvedRoute.canActivateChild = canActivateChild;
    }
    return resolvedRoute;
};
exports.default = resolveRoute;
