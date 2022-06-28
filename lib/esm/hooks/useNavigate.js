import { useHistory, useRouteMatch, generatePath } from "react-router-dom";
import { useCallback } from "react";
function useNavigate() {
    var history = useHistory();
    var _a = useRouteMatch(), path = _a.path, params = _a.params;
    return useCallback(function (navigateTo) {
        var navigate = navigateTo;
        if (!navigateTo.startsWith("/")) {
            navigate = generatePath(path + "/" + navigateTo, params);
        }
        history.push(navigate);
    }, [history, path, params]);
}
export default useNavigate;
