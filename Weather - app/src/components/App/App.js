import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "../Weather";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Weather />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
