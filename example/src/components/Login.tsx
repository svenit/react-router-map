import { Navigator } from "react-hook-guard";
import { browserHistory } from "..";
import { useAuth } from "../guards/AuthProvider";
import { routeNames } from "../routes";

function Login() {
  const { login } = useAuth();
  return (
    <div>
      <h1>This is login page</h1>
      <button onClick={login}>Login</button>
      <button onClick={() => Navigator.push(routeNames.nothing)}>Nothing Page ( Use Navigator )</button>
      {/* Navigator.resolvePath will return absolute path from a route name */}
      <button onClick={() => browserHistory.push(Navigator.resolvePath(routeNames.nothing))}>
        Nothing Page ( Use BrowserHistory )
      </button>
    </div>
  );
}

export default Login;
