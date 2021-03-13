import { Fab, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
        zIndex: theme.zIndex.appBar - 1,
    },
}));

function BookAddIcon(props) {
    const classes = useStyles();
    return(
        <Fab className={classes.fab} color="secondary" component={Link} to="/addBook" aria-label="add book">
            <AddIcon />
        </Fab>
    );
}

export default BookAddIcon;