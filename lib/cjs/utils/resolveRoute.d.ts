import { RouteWithCommand } from "../define";
declare const resolveRoute: (route: RouteWithCommand, parentRoute?: RouteWithCommand<any> | undefined, relativeMode?: boolean) => RouteWithCommand;
export default resolveRoute;
