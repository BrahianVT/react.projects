import * as React from "react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

export function About() {
    return (
        <Box container sx={{ flexGrow: 1, paddingLeft: 4 }}>
            <Typography variant="h4" component="div" gutterBottom>
                How to use the page?
            </Typography>

            <Typography variant="subtitle1" gutterBottom component="div">
               Well this page just has  a  different approach , because all others Axie browsers
               just return the next 100 results, so the search sometimes is a litle bit tiring , this page does the oppositive, 
               it looks for the first 2000 responses and  also clears the data to obtain the purity, attack, defense and energy. 
               <br/>
               Instead of creating a grid system, I decided to create a data grid, so you can filter for any attribute you want
               The only restriction is that you can only apply one filter in the columns. 
               With a  filter and sorting other column, you can create a useful searches. For example:
            </Typography>

            <Typography variant="h4" component="div" gutterBottom>
                Search  for axies with 200 ATK - 200 DEF with at least 50 hp 
            </Typography>

            <Typography variant="subtitle1" gutterBottom component="div">
            I want to check the result to know the prices depending on the abilities.
               1. Just apply the basic filter here a  want the plant, reptile and dusk classes.  <br/>
               2. Then apply a filter in DEF >= 200 . <br/>
               3. Also apply sorting by DESC in ATK <br/>
            </Typography>

            <img src={'./assets/img/example.png'}  alt="" />
            <br/>
            <br/>
            <Typography variant="subtitle1" gutterBottom component="div">
            In this way I can quickly search for some specific axies when there are a lot of posibilities.<br/>
            In the SKILL selects just type the part you want and it will go to the best match. <br/>
            When there are the 2000 in the query result, wait between 2-3 minutes to fill the table completely. <br/>
            Just click in the ID and you will be redirected to the marketplace. <br/><br/>

            Yeah,the page is ugly but at least useful.
            </Typography>

        </Box >
    );
}