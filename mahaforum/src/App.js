import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {/* <AuthProvider>
        <Router>
          <Navbar/>
            <PrivateRoute exact path="/" component={Home}/>
            <PrivateRoute exact path="/history" component={History}/>
            <Route exact path="/login" component={Login}/>
        </Router>
      </AuthProvider> */}
    </div>
  );
}

export default App;