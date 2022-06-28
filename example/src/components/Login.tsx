import { Navigator } from "react-hook-guard";
import { useAuth } from "../guards/AuthProvider";
import { routeNames } from "../routes";

function Login() {
  const { login } = useAuth();
  return (
    <div>
      <h1>This is login page</h1>
      <button onClick={login}>Login</button>
      <button onClick={() => Navigator.pushByName(routeNames.nothing)}>Nothing Page</button>
    </div>
  );
}

export default Login;
