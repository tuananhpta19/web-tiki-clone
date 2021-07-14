import './App.css';
import 'antd/dist/antd.css';
import { PrivateRoute, PublicRoute } from "./components/Routes";
import Home from './views/Home/Home.jsx';
import DashboardUser from './views/Admin/User/User';
import DashboardOrder from './views/Admin/Order/Order';
import DashboardCreateProduct from './views/Admin/Product/CreateProduct';
import DashboardListProduct from './views/Admin/Product/ListProduct';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (

    <Router>
      <Switch>
        {/* <PublicRoute path="/" component={Home} exact={true}></PublicRoute> */}
        <PublicRoute path="/admin/customer" component={DashboardUser} exact={true}></PublicRoute>
        <PublicRoute path="/admin/order" component={DashboardOrder} exact={true}></PublicRoute>
        <PublicRoute path="/admin/product/add-new" component={DashboardCreateProduct} exact={true}></PublicRoute>
        <PublicRoute path="/admin/product/list" component={DashboardListProduct} exact={true}></PublicRoute>
        {/* <PublicRoute path="/admin" component={DashboardUser} exact={true}></PublicRoute> */}
      </Switch>
    </Router>
  );
}

export default App;
