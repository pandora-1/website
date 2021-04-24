import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import {NavbarRoutes} from './routes/routes';
import Navbar from '../src/components/TemplateComponents/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <Router>
          <Navbar />
            <Switch>
              {NavbarRoutes.map(({path, component: Component})=>(
                <Route
                exact
                key={path}
                path={path}
                render={() => <Component />}
              />
              ))}

            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;