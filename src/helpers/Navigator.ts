import { generatePath } from "react-router-dom";
import { Routes, Route, RouteConfig, NavigateOptions } from "../define";
import History from "history";

class Navigator {
  private static isInitialize = false;
  private static paths = new Map();
  private static history: History.History<unknown>;

  static make(routes: Routes, history: History.History<unknown>) {
    if (!this.isInitialize) {
      this.history = history;
      this.bindRoutes(routes);
    }
  }

  private static bindRoutes(routes: Routes): void {
    routes.forEach((route) => this.setupPath(route, route.path));
    this.isInitialize = true;
  }

  private static setupPath(route: Route, path: string): void {
    const routeConfig: RouteConfig = {
      ...route,
      absolutePath: path,
    };
    route.name && this.pushPath(route.name, routeConfig);
    if (route.children?.length) {
      route.children.forEach((child) => {
        const mergePath = route.path.concat("/").concat(child.path);
        this.setupPath(child, mergePath.replace(/\/\/+/g, "/"));
      });
    }
  }

  private static pushPath(routeName: string, routeConfig: RouteConfig): void {
    this.paths.set(routeName, routeConfig);
  }

  /**
   *
   * @returns Get all paths have name
   */
  public static getPathNames(): Map<string, Route> {
    return this.paths;
  }

  /**
   * Get router config by name
   * @param routeName
   * @returns
   */
  public static getPathName(routeName: string): RouteConfig {
    return this.paths.get(routeName);
  }

  /**
   * Check if the path name exists or not
   * @param routeName
   * @returns
   */
  public static hasPathName(routeName: string): boolean {
    return this.paths.has(routeName);
  }

  /**
   * Get absolute path from path string
   * @param path
   * @param options
   * @returns
   */
   public static resolvePath(path: string, options?: NavigateOptions, prefix: string = ""): string {
    let redirectToPath = generatePath(path, options?.params);
    let queryString = "";
    if (options?.queries && Object.keys(options.queries).length) {
      Object.entries(options.queries).forEach(([key, value], index) => {
        const splitChar = index === 0 ? "?" : "&";
        queryString = queryString
          .concat(splitChar)
          .concat(key)
          .concat("=")
          .concat(value?.toString() ?? "");
      });
    }
    return prefix.concat(redirectToPath).concat(queryString);
  }

  /**
   * Go to a path
   * @param path
   * @param options
   */
  public static push(path: string, options?: NavigateOptions): void {
    const redirectToPath = this.resolvePath(path, options);
    this.history.push(redirectToPath, options?.state);
  }

  /**
   * Go to a path by a given name
   * @param routeName
   * @param options
   */
  public static pushByName(routeName: string, options?: NavigateOptions): void {
    if (!this.hasPathName(routeName)) {
      throw Error("Path name does not exists");
    }
    const { absolutePath }: RouteConfig = this.getPathName(routeName);
    const redirectToPath = this.resolvePath(absolutePath, options, "/");
    this.history.push(redirectToPath, options?.state);
  }
}

export default Navigator;
