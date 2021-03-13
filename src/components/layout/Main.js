import {makeStyles, Toolbar} from "@material-ui/core";
import {Switch, Route} from "react-router-dom";
import BookList from "../book/BookList";
import BookForm from "../book/BookForm";
import Profile from "../auth/Profile";
import PrivateRoute from "../auth/PrivateRoute";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Toolbar />
      <Switch>
        <Route path="/bookList" exact component={BookList} />
        <Route path="/addBook" exact component={BookForm} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </main>
  );
}

export default Main;
