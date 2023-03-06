import { React, useState, useMemo } from 'react';
import { Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

//insert view imports here

function App() {
  const [mode, setMode] = useState("lightTheme");

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
      <Switch>
        <Route exact path="/">
          
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
      <Switch onChange={() => setMode(mode === "lightTheme" ? "darkTheme" : "lightTheme")} />
    </ThemeProvider>
  );
}

export default App;