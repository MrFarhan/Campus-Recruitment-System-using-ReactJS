import React, { useEffect } from "react"
import './App.css';
import { Signup } from './Pages/Signup/Signup';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { Login } from './Pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Test } from './Test';
import { MainProfile } from './Pages/Profile/MainProfile';
import firebase from "firebase"
import { allJobsAction, allUsersAction, currentUserAction, isLoadingAction } from './Redux/Actions';
import { Header } from "./Components/Header/Header";
import { Loader } from "./Components/Loader";
import { Vacancies } from "./Pages/Company/Vacancies/Vacancies.js";
import { Companies } from "./Pages/Student/Companies/Companies";
import { AllJobs } from "./Pages/Student/AllJobs/AllJobs";
import { AppliedJobs } from "./Pages/Student/Applied_Jobs/AppliedJobs";

function App() {
  const state = useSelector(state => state)
  const loading = state?.isLoading
  const currentUser = state?.currentUser
  let dispatch = useDispatch()

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
        dispatch(isLoadingAction(false))
      }
    });
// eslint-disable-next-line
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
      }
    });
// eslint-disable-next-line
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
      }
    });
// eslint-disable-next-line
  }, [])
  let studentHeaderData = [  { "Text": "Companies", "route": "/companies" }, { "Text": "All Jobs", "route": "/allJobs" }, { "Text": "Applied Jobs", "route": "/appliedJobs" }, { "Text": "Profile", "route": "/Profile" }]
  let companyHeaderData = [ { "Text": "Vacancies", "route": "/vacancies" }, { "Text": " Profile ", "route": "/profile" }]

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

            {(roleCond("Student") || roleCond("Company") || roleCond("Admin") ? <Route exact path="/profile" ><MainProfile /></Route> : <></>)}


            <Route path="/test" ><Test /></Route>
            {(currentUser?.uid) && <Route exact path="/vacancies" ><Vacancies /></Route>}
            {(currentUser?.uid) && <Route path="/companies" ><Companies /></Route>}
            {(currentUser?.uid) && <Route path="/allJobs" ><AllJobs /></Route>}
            {(currentUser?.uid) && <Route path="/appliedJobs" ><AppliedJobs /></Route>}

          </Switch>




        </div>
      </Router >
    </>
  );
}

export default App;
