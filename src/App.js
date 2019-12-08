import React from "react";
import {
  Button,
  Container,
  Paper,
  Grid,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

import TabPanel from "./components/navbar";
import { defaultUi } from "./components/uiSettings";
import Navigation from './components/navbar'

import './index.css'

const outerTheme = createMuiTheme(defaultUi);

function App() {
  //const classes = useStyles();
  return (
    <MuiThemeProvider theme={outerTheme}>
      <Container spacing={3}>
        <Navigation/>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
