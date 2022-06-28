"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
function useNavigate() {
    var history = react_router_dom_1.useHistory();
    var _a = react_router_dom_1.useRouteMatch(), path = _a.path, params = _a.params;
    return react_1.useCallback(function (navigateTo) {
        var navigate = navigateTo;
        if (!navigateTo.startsWith("/")) {
            navigate = react_router_dom_1.generatePath(path + "/" + navigateTo, params);
        }
        history.push(navigate);
    }, [history, path, params]);
}
exports.default = useNavigate;
