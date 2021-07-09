import './App.css';
import 'antd/dist/antd.css';
import { PrivateRoute, PublicRoute } from "./components/Routes";
import Home from './views/Home/Home.jsx';
import DashboardUser from './views/Admin/User/User';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (

    <Router>
      <Switch>
        {/* <PublicRoute to="/" component={Home} exact={true}></PublicRoute> */}
        <PublicRoute to="/admin" component={DashboardUser} exact={true}></PublicRoute>
      </Switch>
    </Router>
  );
}

export default App;
