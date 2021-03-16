import React, { useState, useEffect } from "react"
import './App.css';
import { Signup } from './Pages/Signup/Signup';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom"
import { Login } from './Pages/Login/Login';
// import { Dashboard } from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './Redux/Store'
import { Test } from './Test';
import { CompanyDashboard } from './Pages/Company/companyDashboard';
import { StudentDashboard } from './Pages/Student/StudentDashboard';
import { AdminDashboard } from './Pages/Admin/AdminDashboard';
import { MainProfile } from './Pages/Profile/MainProfile';
import firebase from "firebase"
import { currentUserAction } from './Redux/Actions';
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";

function App() {
  let history = useHistory()
  const state = useSelector(state => state)
  const loading = state?.isLoading
  const currentUser = state?.currentUser
  let dispatch = useDispatch()
  console.log("currentUser", currentUser)

    // useEffect(() => {
    //   firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/`).on("value", (res) => {
    //     console.log("res. val is ",res.val())
    //     // setCurrentUser(res.val())
    //     dispatch(currentUserAction(res.val()))

    //   })
    // }, [loading])

  // if (!currentUser || !!currentUser) history.push('/')
  if (loading) <div>"...Loading"</div>
  console.log("currentUser", currentUser)
  return (
    <Router>
      <div className="App">
        <h1 className="heading">Campus Recruitment System from App JS</h1>
        {currentUser && !!currentUser && currentUser["role"] && currentUser["role"] === "Student" || currentUser["role"] === "Company" || currentUser["role"] === "Admin" ? <Route exact path="/dashboard/profile" ><MainProfile /></Route> : null}

        {currentUser && !!currentUser && currentUser["role"]&& currentUser["role"] === "Student" ? <Header Data={[{ "Text": "Applied Jobs", "route": "/dashboard/applied_jobs" }, { "Text": "Profile", "route": "/dashboard/Profile" }]} />
          : currentUser && currentUser["role"] === "Company" ? <Header Data={[{ "Text": " My Vacancies ", "route": "/dashboard/vacancies" }, { "Text": " Applied Candidates ", "route": "/dashboard/applied_job" }, { "Text": " Profile ", "route": "/dashboard/profile" }]} />
            : null}


        <Switch>
          <Route exact path="/" >  <Login /></Route>
          <Route path="/signup" ><Signup /></Route>
          {currentUser && !!currentUser && currentUser["role"]&& currentUser["role"] === "Student" ? <Route exact path="/dashboard" ><StudentDashboard /></Route>
            : currentUser && currentUser["role"] === "Company" ? <Route exact path="/dashboard" ><CompanyDashboard /></Route>
              : currentUser && currentUser["role"] === "Admin" ? < Route exact path="/dashboard" ><AdminDashboard /></Route>
                : null}

          <Route path="/test" ><Test /></Route>
        </Switch>




      </div>
    </Router >
  );
}

export default App;
