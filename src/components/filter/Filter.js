import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function Filter() {
    const classes = useStyles();

    const [option, setOption] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [textField, setTextField] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendReport = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                Filter
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" align="center">Task Filters</DialogTitle>
                <DialogContent>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2020-09-17"
                        fullWidth
                        className={classes.textField}
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Clear all
                    </Button>
                    <Button onClick={handleSendReport} color="primary">
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}