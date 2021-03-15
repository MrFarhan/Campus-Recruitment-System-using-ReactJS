import './App.css';
import { Signup } from './Pages/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Login } from './Pages/Login/Login';
// import { Dashboard } from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Store'
import { Test } from './Test';
import { CompanyDashboard } from './Pages/Company/companyDashboard';
import { StudentDashboard } from './Pages/Student/StudentDashboard';
import { AdminDashboard } from './Pages/Admin/AdminDashboard';
import { MainProfile } from './Pages/Profile/MainProfile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1 className="heading">Campus Recruitment System</h1>
          <Route path="/comp-dashboard" ><CompanyDashboard /></Route>
          <Route path="/comp-dashboard/profile" ><MainProfile /></Route>
          <Switch>
            <Route exact path="/" >  <Login /></Route>
            <Route path="/signup" ><Signup /></Route>
            {/* <Route path="/dashboard" ><Dashboard /></Route> */}
            <Route path="/std-dashboard" ><StudentDashboard /></Route>
            <Route path="/admin-dashboard" ><AdminDashboard /></Route>
            <Route path="/test" ><Test /></Route>
          </Switch>




        </div>
      </Router >
    </Provider>
  );
}

export default App;
