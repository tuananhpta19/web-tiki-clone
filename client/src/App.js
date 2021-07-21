import './App.css';
import 'antd/dist/antd.css';
import { PrivateRoute, PublicRoute } from "./components/Routes";
import Home from './views/Home/Home.jsx';
import LoginPage from './views/Login/Login';
//admin
import DashboardUser from './views/Admin/User/User';
import DashboardOrder from './views/Admin/Order/Order';
import DashboardCreateProduct from './views/Admin/Product/CreateProduct';
import DashboardListProduct from './views/Admin/Product/ListProduct';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (

    <Router>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} exact={true}></PublicRoute>
        <PublicRoute path="/" component={Home} exact={true}></PublicRoute>
        <PrivateRoute routerRole="admin" path="/admin/customer" component={DashboardUser} exact={true}></PrivateRoute>
        <PrivateRoute routerRole="admin" path="/admin/order" component={DashboardOrder} exact={true}></PrivateRoute>
        <PrivateRoute routerRole="admin" path="/admin/product/add-new" component={DashboardCreateProduct} exact={true}></PrivateRoute>
        <PrivateRoute routerRole="admin" path="/admin/product/list" component={DashboardListProduct} exact={true}></PrivateRoute>
        {/* <PublicRoute path="/admin" component={DashboardUser} exact={true}></PublicRoute> */}
      </Switch>
    </Router>
  );
}

export default App;
