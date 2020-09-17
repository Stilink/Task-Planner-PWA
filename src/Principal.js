import React from 'react';
import ResponsiveDrawer from './components/navigationDrawer/NavigationDrawer';
import OutlinedCard from './components/cards/Cards';
import NewTask from './components/newTask/NewTask';
import SignUp from './components/user/User';
import Filter from './components/filter/Filter';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const info = [{
    "description": "some description text ",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail",
        "password": "password"
    },
    "status": "Ready",
    "dueDate": 156464645646
  },];
  




export default function Principal(props) {
    const listTodo = info;
    const handlePushTask  = (newTask) => {
        info.push(newTask);
    };
    return (
        <div className="main">
            <ResponsiveDrawer />
            <NewTask func={handlePushTask} />
            <Filter />
            <Grid container>
                {listTodo.map((todo, i) => {
                    return (
                        <OutlinedCard key={i} {...todo} />
                    );
                })}
            </Grid>
        </div>
    );
}