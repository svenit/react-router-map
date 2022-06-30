import "./App.css";
import { RouterOutlet } from "react-router-map";
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
