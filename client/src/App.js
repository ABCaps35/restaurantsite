import { React, useState, useMemo } from 'react';
import { Route, Switch } from "react-router-dom" ;
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

//insert view imports here
import TopNavBar from './Components/TopNavBar';
import Home from './Views/Home';

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () => 
      createTheme({
        palette: {
          mode: mode,
        }
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TopNavBar title="RESTAURANT NAME" />
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/about">
          
        </Route>
        <Route exact path="/menu">
          
        </Route>
        <Route exact path="/hours">
          
        </Route>
        <Route exact path="/directions">
          
        </Route>
        <Route exact path="/contact">
          
        </Route>
      </Switch>
      {/*<muiSwitch onChange={() => setMode(mode === "light" ? "dark" : "light")} />*/}
    </ThemeProvider>
  );
}

export default App;