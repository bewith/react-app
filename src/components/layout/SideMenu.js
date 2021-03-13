import {makeStyles, Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom"
import BookIcon from "@material-ui/icons/Book";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

function SideMenu() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" className={classes.drawer} 
    classes={{
      paper: classes.drawerPaper,
    }} >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button key="book" component={Link} to={"/bookList"}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="book" />
          </ListItem>
          <ListItem button key="profile" component={Link} to={"/profile"}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="profile" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default SideMenu;
