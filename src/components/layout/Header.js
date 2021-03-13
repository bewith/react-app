import {AppBar, makeStyles, Typography, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/LoginButton"
import LogoutButton from "../auth/LogoutButton"

const useStyles = makeStyles((theme)=>({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  headerTitle: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

function Header(props) {
  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();

  const loginLogout = isAuthenticated ? <p>{user.name} <LogoutButton /></p> : <LoginButton />;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap component={Link} to="/" color="inherit" className={classes.headerTitle}>
          {props.title}
        </Typography>
        {loginLogout}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
