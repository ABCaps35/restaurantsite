import { React, useState, useMemo } from 'react';
import { Route, Switch } from "react-router-dom" ;
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

//insert view imports here
import TopNavBar from './Components/TopNavBar';
import Home from './Views/Home';
import About from './Views/About';
import Menu from './Views/Menu';
import Hours from './Views/Hours';
import Directions from './Views/Directions';
import Contact from './Views/Contact';

function App() {
  const [mode, setMode] = useState(false);

  const theme = useMemo(
    () => 
      createTheme({
        palette: {
          mode: (mode ? "dark" : "light"),
        }
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TopNavBar title="RESTAURANT NAME" mode={mode} toggle={setMode}/>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/menu">
          <Menu/>
        </Route>
        <Route exact path="/hours">
          <Hours/>
        </Route>
        <Route exact path="/directions">
          <Directions/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;