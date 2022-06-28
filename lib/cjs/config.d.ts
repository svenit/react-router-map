import { AuthRouterConfigOptions, RouterGuardExtraRoutes } from "./define";
export declare let fallbackComponents: AuthRouterConfigOptions;
export declare let extraRoutes: RouterGuardExtraRoutes;
export declare const config: (options: Partial<AuthRouterConfigOptions> & Partial<RouterGuardExtraRoutes>) => void;
