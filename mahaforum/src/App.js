import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
<<<<<<< HEAD
import {AllOpenRoutes, AllPrivateRoutes} from './routes/routes';
=======
import {NavbarRoutes} from './routes/routes';
import Navbar from '../src/components/TemplateComponents/Navbar/Navbar'

>>>>>>> f21283b37aafc1385b1cb1c5b236d2104709d5e2

function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <Router>
<<<<<<< HEAD
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
=======
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
>>>>>>> f21283b37aafc1385b1cb1c5b236d2104709d5e2
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;