import React, { useState, useEffect } from "react"
import './App.css';
import { Signup } from './Pages/Signup/Signup';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from "react-router-dom"
import { Login } from './Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Test } from './Test';
import { CompanyDashboard } from './Pages/Company/Dashboard/companyDashboard';
import { StudentDashboard } from './Pages/Student/Dashboard/StudentDashboard';
import { AdminDashboard } from './Pages/Admin/AdminDashboard';
import { MainProfile } from './Pages/Profile/MainProfile';
import firebase from "firebase"
import { allJobsAction, allUsersAction, currentUserAction, isLoadingAction } from './Redux/Actions';
import { Header } from "./Components/Header";
import { Loader } from "./Components/Loader";
import { Vacancies } from "./Pages/Company/Vacancies/Vacancies";
import { Companies } from "./Pages/Student/Companies/Companies";
import { All_Jobs } from "./Pages/Student/All_Jobs/All_Jobs";
import { AppliedJobs } from "./Pages/Student/Applied_Jobs/AppliedJobs";

function App() {
  let history = useHistory()
  const state = useSelector(state => state)
  const loading = state?.isLoading
  const currentUser = state?.currentUser
  let dispatch = useDispatch()
  // console.log("currentUser", currentUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        firebase.database().ref(`Users/${firebase.auth().currentUser?.uid}/`).on("value", (res) => {
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        firebase.database().ref(`Users/`).on("value", (res) => {
          dispatch(allUsersAction(res.val()))
        })
      } else {
        // No user is signed in.
        console.log("All users else triggered ")
      }
    });

  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        firebase.database().ref(`Jobs/`).on("value", (res) => {
          dispatch(allJobsAction(res.val()))
        })
      } else {
        // No user is signed in.
        console.log("All users jobs else triggered ")
      }
    });

  }, [])
  let studentHeaderData = [{ "Text": "Dashboard", "route": "/dashboard" }, , { "Text": "Companies", "route": "/dashboard/companies" }, { "Text": "All Jobs", "route": "/dashboard/all_jobs" }, { "Text": "Applied Jobs", "route": "/dashboard/appliedJobs" }, { "Text": "Profile", "route": "/dashboard/Profile" }]
  let companyHeaderData = [{ "Text": "Dashboard", "route": "/dashboard" }, { "Text": " My Posts ", "route": "/dashboard/vacancies" }, { "Text": " Applied Candidates ", "route": "/dashboard/applied_candidates" }, { "Text": " Profile ", "route": "/dashboard/profile" }]

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
            {(currentUser?.uid) && <Route path="/dashboard/companies" ><Companies /></Route>}
            {(currentUser?.uid) && <Route path="/dashboard/all_jobs" ><All_Jobs /></Route>}
            {(currentUser?.uid) && <Route path="/dashboard/appliedJobs" ><AppliedJobs /></Route>}

          </Switch>




        </div>
      </Router >
    </>
  );
}

export default App;
