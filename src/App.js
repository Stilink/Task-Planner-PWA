import React from 'react';
import logo from './logo.svg';
import './App.css';
import SingIn from './components/login/Login';
import ResponsiveDrawer from './components/navigationDrawer/NavigationDrawer';
import OutlinedCard from './components/cards/Cards';
import NewTask from './components/newTask/NewTask';
import SignUp from './components/signUp/SignUp';
import Filter from './components/filter/Filter';

const info = {
    "description": "some description text ",
    "responsible": {
      "name": "Santiago Carrillo",
      "email": "sancarbar@gmail"
    },
    "status": "ready",
    "dueDate": 156464645646
  };

function App() {
  return (
    <div className="App">
      {/*<SingIn />
      <ResponsiveDrawer />
      <OutlinedCard {...info} />
      <NewTask />
      <SignUp />*/}
      <Filter />
    </div>
  );
}

export default App;
