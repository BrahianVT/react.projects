import { Grid } from "@mui/material";
import React from "react";
import Hbar from "../components/HBar";
import NavBar from "../components/NavBar";

function Main(){
    return (
        <div>
            <NavBar/>
            <Grid item xs={12} sm={4} >
                <Hbar />
            </Grid>
        </div>
    );
}

export default Main;