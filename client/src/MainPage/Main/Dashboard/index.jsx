/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Admindashboard from './admindashboard';
import Employeedashboard from './employeedashboard';
import SuperAdminDashboard from './superadmindashboard';
const DashboardRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route path={`${match.url}/dashboard`} component={Admindashboard} />
      <Route path={`${match.url}/employee-dashboard`} component={Employeedashboard} />
      <Route path={`${match.url}/superadmin-dashboard`} component={SuperAdminDashboard} />
   </Switch>
  
);

export default DashboardRoute;
