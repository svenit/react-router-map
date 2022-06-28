"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.extraRoutes = exports.fallbackComponents = void 0;
var RouterFallback_1 = __importDefault(require("./components/RouterFallback"));
exports.fallbackComponents = {
    SuspenseFallback: RouterFallback_1.default,
    CantActivateFallback: RouterFallback_1.default,
};
exports.extraRoutes = {};
var config = function (options) {
    var _a, _b;
    exports.fallbackComponents.CantActivateFallback = (_a = options.CantActivateFallback) !== null && _a !== void 0 ? _a : exports.fallbackComponents.CantActivateFallback;
    exports.fallbackComponents.SuspenseFallback = (_b = options.SuspenseFallback) !== null && _b !== void 0 ? _b : exports.fallbackComponents.SuspenseFallback;
    exports.extraRoutes.matchAllRoute = options.matchAllRoute;
};
exports.config = config;
