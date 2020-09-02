import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 500,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h4">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.status} - {new Date(props.dueDate).toDateString()}
                    </Typography>
                    <Typography  variant="body2" component="p">
                        {props.responsible.name} - {props.responsible.email}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}