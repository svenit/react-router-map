import { useContext } from "react";
import RouterOutlet from "./RouterOutlet";
import { RouterOutletContext } from "./RouterProvider";

const RouterRoot = () => {
  const routerOutletProps = useContext(RouterOutletContext);
  return <RouterOutlet {...routerOutletProps} />;
};

export default RouterRoot;
