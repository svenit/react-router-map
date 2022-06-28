"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_browserify_1 = require("path-browserify");
function normalizeUrl(url) {
    var domain = "";
    var path = "";
    try {
        var theUrl = new URL(url);
        domain = theUrl.origin;
        path = theUrl.pathname;
    }
    catch (e) {
        path = url;
    }
    var resolvedPath = path_browserify_1.normalize(path);
    return "" + domain + resolvedPath;
}
exports.default = normalizeUrl;
