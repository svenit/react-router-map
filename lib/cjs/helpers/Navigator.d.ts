import { Routes, Route, RouteConfig, NavigateOptions } from "../define";
import History from "history";
declare class Navigator {
    private static isInitialize;
    private static paths;
    private static history;
    static make(routes: Routes, history: History.History<unknown>): void;
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
     * Get absolute path from path string
     * @param path
     * @param options
     * @returns
     */
    static resolvePath(path: string, options?: NavigateOptions, prefix?: string): string;
    /**
     * Go to a path
     * @param path
     * @param options
     */
    static push(path: string, options?: NavigateOptions): void;
    /**
     * Go to a path by a given name
     * @param routeName
     * @param options
     */
    static pushByName(routeName: string, options?: NavigateOptions): void;
}
export default Navigator;
