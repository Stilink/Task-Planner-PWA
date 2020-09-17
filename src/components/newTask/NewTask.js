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


export default function NewTask() {
    const [option, setOption] = React.useState('');
    const [date, setDate] = React.useState('');
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    New task
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="responsible"
                        label="Responsible"
                        name="responsible"
                    />
                    <br />
                    <Select
                        native
                        value={option}
                        fullWidth
                        onChange={(e) => {
                            setOption(e.target.value);
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
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        New task
                </Button>
                </form>
            </div>
        </Container>
    );
}