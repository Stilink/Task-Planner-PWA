import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function NewTask(props) {
    const [state, setState] = React.useState('');
    const [date, setDate] = React.useState('2020-09-17');
    const [description, setDescription] = React.useState('');
    const [responsible, setResponsible] = React.useState('');
    const classes = useStyles();
    const handleSubmit = () => {
        let variable = {
            "description": description,
            "responsible": {
                "name": responsible,
                "email": localStorage.getItem('email'),
            },
            "status": state,
            "dueDate": new Date(date)
        }
        props.addFunc(variable);
    };
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    New task
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoFocus
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="responsible"
                        label="Responsible"
                        name="responsible"
                        onChange={(e) => {
                            setResponsible(e.target.value);
                        }}
                    />
                    <br />
                    <Select
                        native
                        value={state}
                        fullWidth
                        onChange={(e) => {
                            setState(e.target.value);
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value="Ready">Ready</option>
                        <option value="In progress">In progress</option>
                        <option value="Done">Done</option>
                    </Select>
                    <br />
                    <br />
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2020-09-17"
                        fullWidth
                        className={classes.textField}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        New task
                </Button>
                </form>
            </div>
        </Container>
    );
}