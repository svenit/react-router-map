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
import { jsx as _jsx } from "react/jsx-runtime";
import { generatePath, Link, useRouteMatch } from "react-router-dom";
import { memo, useMemo } from "react";
import { normalizeUrl } from "../utils";
import { join, isAbsolute } from "path-browserify";
var RelativeLink = memo(function (_a) {
    var to = _a.to, props = __rest(_a, ["to"]);
    var rest = props;
    var _b = useRouteMatch(), path = _b.path, params = _b.params;
    var realTo = useMemo(function () {
        var rawTo;
        if (to instanceof Array) {
            var resolved = join.apply(void 0, to);
            if (isAbsolute(resolved)) {
                rawTo = resolved;
            }
            else {
                rawTo = join.apply(void 0, __spreadArray([path], to));
            }
        }
        else if (typeof to === "string") {
            if (isAbsolute(to) || to.startsWith("https://") || to.startsWith("http://")) {
                rawTo = normalizeUrl(to);
            }
            else {
                rawTo = normalizeUrl(path + "/" + to);
            }
        }
        else {
            rawTo = to;
        }
        return typeof rawTo !== "string" ? rawTo : generatePath(rawTo, params);
    }, [to, path, params]);
    return _jsx(Link, __assign({ to: realTo }, rest), void 0);
});
export default RelativeLink;
