import { Grid } from "@mui/material";
import * as React from "react";
import Hbar from "../components/HBar";
import NavBar from "../components/NavBar";
import GridPagination from "../components/GridPagination";
import MyContext from "../MyContext.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./About";


function grid() {
    return (
        <>
        <Grid item xs={12} sm={6} md={5} lg={2} xl={2}>
            <Hbar />
        </Grid>
            <Grid item container spacing={1} xs={12} sm={6} lg={9} xl={9} sx={{ minHeight: 500,maxHeight: 750 }} >
                <GridPagination />
            </Grid></>);
}

function Main() {
    const [criteria, setCriteria] = React.useState({})
    const addData = (newData) => setCriteria(newData)

    const [cleanSelects, setCleanSelects] = React.useState(false)
    const changeClean = (change) => setCleanSelects(change)

    return (
        <MyContext.Provider value={{ criteria, addData, cleanSelects, changeClean }}>
            <Router>
                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sx={{ padding: 1 }}>
                        <NavBar />
                    </Grid>

                    <Switch>
                        <Route exact path="/" component={grid} />
                        <Route exact path="/about" component={About} />
                    </Switch>

                </Grid >
            </Router>
        </MyContext.Provider>
    );
}

export default Main;