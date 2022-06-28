import { normalize } from "path-browserify";
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
    var resolvedPath = normalize(path);
    return "" + domain + resolvedPath;
}
export default normalizeUrl;
