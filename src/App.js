import React, { useState, useEffect } from "react"
import './App.css';
import { Signup } from './Pages/Signup/Signup';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from "react-router-dom"
import { Login } from './Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Test } from './Test';
import { CompanyDashboard } from './Pages/Company/Dashboard/companyDashboard';
import { StudentDashboard } from './Pages/Student/StudentDashboard';
import { AdminDashboard } from './Pages/Admin/AdminDashboard';
import { MainProfile } from './Pages/Profile/MainProfile';
import firebase from "firebase"
import { currentUserAction, isLoadingAction } from './Redux/Actions';
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";
import { Vacancies } from "./Pages/Company/Vacancies/Vacancies";

function App() {
  let history = useHistory()
  const state = useSelector(state => state)
  const loading = state?.isLoading
  const currentUser = state?.currentUser
  let dispatch = useDispatch()
  console.log("currentUser", currentUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        firebase.database().ref(`Users/${user?.role}/${firebase.auth().currentUser?.uid}/`).on("value", (res) => {
          dispatch(currentUserAction(res.val()))
          dispatch(isLoadingAction(false))
        })
      } else {
        // No user is signed in.
        console.log("else in app for use effect called ")
        dispatch(isLoadingAction(false))
      }
    });

  }, [])


  let studentHeaderData = [{ "Text": "Dashboard", "route": "/dashboard" }, { "Text": "Applied Jobs", "route": "/dashboard/applied_jobs" }, { "Text": "Profile", "route": "/dashboard/Profile" }]
  let companyHeaderData = [{ "Text": "Dashboard", "route": "/dashboard" }, { "Text": " My Vacancies ", "route": "/dashboard/vacancies" }, { "Text": " Applied Candidates ", "route": "/dashboard/applied_job" }, { "Text": " Profile ", "route": "/dashboard/profile" }]

  const roleCond = (param) => currentUser?.role === param;

  if (loading) return <Loader />
  return (
    <>
      <Router>
        {!loading && !currentUser?.uid ? <Redirect to="/" /> : <></>}
        <div className="App">

          {(currentUser?.uid) && <Header Data={roleCond("Student") ? studentHeaderData : roleCond("Company") ? companyHeaderData : <></>} />}

          <Switch>
            <Route exact path="/" >  <Login /></Route>
            <Route path="/signup" ><Signup /></Route>

            {(currentUser?.uid) && <Route exact path="/dashboard" >{roleCond("Student") ? <StudentDashboard /> : roleCond("Company") ? <CompanyDashboard /> : roleCond("Admin") ? <AdminDashboard /> : <></>}</Route>}
            {(roleCond("Student") || roleCond("Company") || roleCond("Admin") ? <Route exact path="/dashboard/profile" ><MainProfile /></Route> : <></>)}


            <Route path="/test" ><Test /></Route>
            {(currentUser?.uid) && <Route path="/dashboard/vacancies" ><Vacancies /></Route>}
          </Switch>




        </div>
      </Router >
    </>
  );
}

export default App;
