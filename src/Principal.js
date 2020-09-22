import React from 'react';
import ResponsiveDrawer from './components/navigationDrawer/NavigationDrawer';
import OutlinedCard from './components/cards/Cards';
import NewTask from './components/newTask/NewTask';
import Filter from './components/filter/Filter';
import Grid from '@material-ui/core/Grid';

export default function Principal(props) {
    const [listTodo, setListTodo] = React.useState([]);
    const addTodo = (newTask) => {
        setListTodo((prevState) => {
            return [...prevState, newTask]
        });
    }

    const filter = (date, status, responsible) => {
        setListTodo((prevState) => {
            return prevState.filter((todo) =>
                todo.status === status ||
                todo.dueDate === date ||
                todo.responsible.email === responsible
            )
        });
    }
    return (
        <div className="main">
            <ResponsiveDrawer />
            <NewTask addFunc={addTodo} />
            <Filter filterFunc={filter} />
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