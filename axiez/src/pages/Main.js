import { Grid } from "@mui/material";
import * as React from "react";
import Hbar from "../components/HBar";
import NavBar from "../components/NavBar";
import GridPagination from "../components/GridPagination";
import MyContext from "../MyContext.js";

function Main(){
    const [criteria, setCriteria] = React.useState({})
    const addData = (newData) =>  setCriteria(newData)
    
    return (
      <MyContext.Provider value={{criteria, addData}}>
         <Grid container spacing={3} sx={{ flexGrow:1 }}>
            <Grid item xs={12} sx={{ padding: 1 }}>
                <NavBar  />
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={2} xl={2}>
                <Hbar />
            </Grid>
            
            <Grid item container spacing ={1} xs={12} sm={6} lg={9} xl={9} sx={{minHeight:700  }} >
               <GridPagination />
            </Grid>
        </Grid >
      </MyContext.Provider>  
    );
}

export default Main;