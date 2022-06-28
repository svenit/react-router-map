import "./App.css";
import { RouterRoot } from "react-hook-guard";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterRoot />
    </div>
  );
}

export default withRouter(App);
