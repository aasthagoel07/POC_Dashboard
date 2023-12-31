import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "./App.css";

import UserLayout from "./layout/userLayouts/userLayout";
import Loader from "./components/loader";
import DashboardAps from "./components/dashboardComponent/dashboardAps";
import SummaryPage from "./components/summaryPage/summaryPage";


const Login = React.lazy(() => import("./components/login"));
// const Password = React.lazy(() => import("./password"));

const SignUp = React.lazy(() => import("./components/signup"));
const MembersForm = React.lazy(() => import("./components/MembersForm/membersForm"));
const Dashboard = React.lazy(() => import("./components/dashboard"));
const App = () => {
  return (
    <Router>
      <UserLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path={`/login`} element={<Login />} />
            <Route path={`/signup`} element={<SignUp />} />
            <Route path={`/membersForm`} element={<MembersForm />} />
            <Route path={`/dashboard`} element={<Dashboard />}>
              <Route index element={<DashboardAps />} />
              <Route  path="summary" element={<SummaryPage />} />
            </Route>
            {/* <PrivateRoute path={`/Details`} component={Login} />

          <PrivateRoute path={`/home`} component={Login} />
          <PrivateRoute path={`/payment`} component={Login} /> */}

            {/* <Redirect to="/error" /> */}
          </Routes>
        </Suspense>
      </UserLayout>
    </Router>
  );
};

export default App;
