import Header from './components/layout/Header.js';
import SideMenu from './components/layout/SideMenu.js';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Main from './components/layout/Main';
import { BrowserRouter } from 'react-router-dom';

const title = "Book Store";
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <CssBaseline />
        <BrowserRouter>
          <Header title={title} />
          <SideMenu />
          <Main />
        </BrowserRouter>
    </div>
  );
}

export default App;
