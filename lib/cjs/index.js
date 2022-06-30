"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigate = exports.Navigator = exports.RelativeLink = exports.RouterOutlet = void 0;
var config_1 = require("./config");
__exportStar(require("./define"), exports);
__exportStar(require("./utils"), exports);
var RouterOutlet_1 = require("./components/RouterOutlet");
Object.defineProperty(exports, "RouterOutlet", { enumerable: true, get: function () { return __importDefault(RouterOutlet_1).default; } });
var RelativeLink_1 = require("./components/RelativeLink");
Object.defineProperty(exports, "RelativeLink", { enumerable: true, get: function () { return __importDefault(RelativeLink_1).default; } });
var Navigator_1 = require("./helpers/Navigator");
Object.defineProperty(exports, "Navigator", { enumerable: true, get: function () { return __importDefault(Navigator_1).default; } });
var useNavigate_1 = require("./hooks/useNavigate");
Object.defineProperty(exports, "useNavigate", { enumerable: true, get: function () { return __importDefault(useNavigate_1).default; } });
var reactHookGuard = {
    config: config_1.config,
};
exports.default = reactHookGuard;
