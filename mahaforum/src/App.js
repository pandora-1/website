import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {AllOpenRoutes, AllPrivateRoutes} from './routes/routes';

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
            {AllPrivateRoutes.map(({path, component: Component})=>(
              <PrivateRoute
              exact
              key={path}
              path={path}
              component={Component}
            />
            ))}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;