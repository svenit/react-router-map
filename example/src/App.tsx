import "./App.css";
import { RouterOutlet } from "react-hook-guard";
import { withRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <RouterOutlet routes={routes} relativeMode={true} />
    </div>
  );
}

export default withRouter(App);
