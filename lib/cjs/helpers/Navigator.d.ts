import { Routes, Route, RouteConfig, NavigateOptions } from "../define";
import History from "history";
declare class Navigator {
    private static isInitialize;
    private static paths;
    private static history;
    constructor(routes: Routes, history: History.History<unknown>);
    private static bindRoutes;
    private static setupPath;
    private static pushPath;
    /**
     *
     * @returns Get all paths have name
     */
    static getPathNames(): Map<string, Route>;
    /**
     * Get router config by name
     * @param routeName
     * @returns
     */
    static getPathName(routeName: string): RouteConfig;
    /**
     * Check if the path name exists or not
     * @param routeName
     * @returns
     */
    static hasPathName(routeName: string): boolean;
    /**
     * Get absolute path from a route name
     * @param routeName
     * @param options
     * @returns
     */
    static resolvePath(routeName: string, options?: NavigateOptions): string;
    /**
     * Go to a absolute path by a given route name
     * @param routeName
     * @param options
     */
    static push(routeName: string, options?: NavigateOptions): void;
    /**
     * Replace current path to absolute path by a given route name
     * @param routeName
     * @param options
     */
    static replace(routeName: string, options?: NavigateOptions): void;
}
export default Navigator;
