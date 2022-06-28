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
import { generatePath } from "react-router-dom";
var Navigator = /** @class */ (function () {
    function Navigator() {
    }
    Navigator.make = function (routes, history) {
        if (!this.isInitialize) {
            this.history = history;
            this.bindRoutes(routes);
        }
    };
    Navigator.bindRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) { return _this.setupPath(route, route.path); });
        this.isInitialize = true;
    };
    Navigator.setupPath = function (route, path) {
        var _this = this;
        var _a;
        var routeConfig = __assign(__assign({}, route), { absolutePath: path });
        route.name && this.pushPath(route.name, routeConfig);
        if ((_a = route.children) === null || _a === void 0 ? void 0 : _a.length) {
            route.children.forEach(function (child) {
                var mergePath = route.path.concat("/").concat(child.path);
                _this.setupPath(child, mergePath.replace(/\/\/+/g, "/"));
            });
        }
    };
    Navigator.pushPath = function (routeName, routeConfig) {
        this.paths.set(routeName, routeConfig);
    };
    /**
     *
     * @returns Get all paths have name
     */
    Navigator.getPathNames = function () {
        return this.paths;
    };
    /**
     * Get router config by name
     * @param routeName
     * @returns
     */
    Navigator.getPathName = function (routeName) {
        return this.paths.get(routeName);
    };
    /**
     * Check if the path name exists or not
     * @param routeName
     * @returns
     */
    Navigator.hasPathName = function (routeName) {
        return this.paths.has(routeName);
    };
    /**
     * Get absolute path from path string
     * @param path
     * @param options
     * @returns
     */
    Navigator.resolvePath = function (path, options, prefix) {
        if (prefix === void 0) { prefix = ""; }
        var redirectToPath = generatePath(path, options === null || options === void 0 ? void 0 : options.params);
        var queryString = "";
        if ((options === null || options === void 0 ? void 0 : options.queries) && Object.keys(options.queries).length) {
            Object.entries(options.queries).forEach(function (_a, index) {
                var _b;
                var key = _a[0], value = _a[1];
                var splitChar = index === 0 ? "?" : "&";
                queryString = queryString
                    .concat(splitChar)
                    .concat(key)
                    .concat("=")
                    .concat((_b = value === null || value === void 0 ? void 0 : value.toString()) !== null && _b !== void 0 ? _b : "");
            });
        }
        return prefix.concat(redirectToPath).concat(queryString);
    };
    /**
     * Go to a path
     * @param path
     * @param options
     */
    Navigator.push = function (path, options) {
        var redirectToPath = this.resolvePath(path, options);
        this.history.push(redirectToPath, options === null || options === void 0 ? void 0 : options.state);
    };
    /**
     * Go to a path by a given name
     * @param routeName
     * @param options
     */
    Navigator.pushByName = function (routeName, options) {
        if (!this.hasPathName(routeName)) {
            throw Error("Path name does not exists");
        }
        var absolutePath = this.getPathName(routeName).absolutePath;
        var redirectToPath = this.resolvePath(absolutePath, options, "/");
        this.history.push(redirectToPath, options === null || options === void 0 ? void 0 : options.state);
    };
    Navigator.isInitialize = false;
    Navigator.paths = new Map();
    return Navigator;
}());
export default Navigator;
