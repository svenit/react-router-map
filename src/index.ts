import { config } from "./config";

export * from "./define";
export * from "./utils";

export { default as RouterProvider } from "./components/RouterProvider";
export { default as RouterRoot } from "./components/RouterRoot";
export { default as RouterOutlet } from "./components/RouterOutlet";
export { default as RelativeLink } from "./components/RelativeLink";
export { default as Navigator } from "./helpers/Navigator";
export { default as useNavigate } from "./hooks/useNavigate";

const reactHookGuard = {
  config,
};

export default reactHookGuard;
