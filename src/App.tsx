import * as React from 'react';
import './App.css';
// import components from react-router-dom.
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
// import reusable components for creating, editing, and viewing customer details.
import Home from './components/Home';
import Create from './components/customer/Create';
import EditCustomer from './components/customer/Edit';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            <li>
              <Link to={'/create'}> Create New Customer </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/create'} exact component={Create} />
          {/* find customer to edit by customer.id */}
          <Route path={'/edit/:id'} exact component={EditCustomer} />
        </Switch>
      </div>
    );
  }
}
// withRouter component passes closest route's match, current location, and history objs as props to app component.
export default withRouter(App);