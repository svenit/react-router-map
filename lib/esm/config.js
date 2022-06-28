import RouterFallback from "./components/RouterFallback";
export var fallbackComponents = {
    SuspenseFallback: RouterFallback,
    CantActivateFallback: RouterFallback,
};
export var extraRoutes = {};
export var config = function (options) {
    var _a, _b;
    fallbackComponents.CantActivateFallback = (_a = options.CantActivateFallback) !== null && _a !== void 0 ? _a : fallbackComponents.CantActivateFallback;
    fallbackComponents.SuspenseFallback = (_b = options.SuspenseFallback) !== null && _b !== void 0 ? _b : fallbackComponents.SuspenseFallback;
    extraRoutes.matchAllRoute = options.matchAllRoute;
};
