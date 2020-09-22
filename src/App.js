import React from 'react';
import './App.css';
import SignIn from './components/login/Login';
import NewTask from './components/newTask/NewTask';
import SignUp from './components/user/User';
import Filter from './components/filter/Filter';
import Principal from "./Principal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





function App() {
  localStorage.setItem('email', "sancarbar@gmail");
  localStorage.setItem('name', "Santiago Carrillo");
  localStorage.setItem('password', "password");
  const main = () => {
    let flag = localStorage.getItem('isLoggedIn');
    if (flag) {
      return <Principal />;
    } else {
      return <SignIn />;
    }
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={main} />
          <Route path="/newTask" exact component={NewTask} />
          <Route path="/filter" exact component={Filter} />
          <Route path="/userProfile" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
