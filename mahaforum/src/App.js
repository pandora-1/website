import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {AllOpenRoutes} from './routes/routes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            {AllOpenRoutes.map(({path, component: Component})=>(
              <Route
              exact
              key={path}
              path={path}
              render={() => <Component />}
            />
            ))}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;