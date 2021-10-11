import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import 'fontsource-roboto';
import './dashboard.css'
import YouTubeIcon from '@material-ui/icons/YouTube';
import PublicIcon from '@material-ui/icons/Public';
import VideocamIcon from '@material-ui/icons/Videocam';
import CardsHeaders from "../components/CardsHeaders";
import Cards from "../components/Cards";
import Graphics from "../components/Graphics";
import TablaMaterial from "../components/TablaMaterial";

const useStyles = makeStyles( () =>({
    root:{
        flexGrow:1
    },
    iconos:{
        color: 'white'
    },
    container:{
        padding: "10px",
        alignItems: 'center'
    },
    containerGrafica: {
        marginTop: '10px'
    },
    containerTabla: {
        marginTop: '10px' 
    }
}));

const data = [
    {
      id:1,
      video:
        "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
      fecha: "6 de sep. 2020",
      visualizaciones: 32,
      imagen: "./assets/img/split.webp",
    },
    {
      id:2,
        video:
          "Cómo Solucionar Error al Crear Applicación de React JS",
        fecha: "5 de sep. 2020",
        visualizaciones: 31,
        imagen: "./assets/img/error.webp",
      },
      {
      id:3,
        video:
          "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
        fecha: "4 de sep. 2020",
        visualizaciones: 21,
        imagen: "./assets/img/forever.webp",
      },
  ];

function DashBoard(props) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <NavBar/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeaders  icono={<YouTubeIcon className={classes.iconos}/>} titulo="CANAL" 
                texto="Example Canal" color="rgba(248,80,50,1)" font="white"/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeaders  icono={<PublicIcon className={classes.iconos}/>} titulo="PAIS" 
                texto="México" color="rgba(248,80,50,1)" font="white"/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeaders  icono={<VideocamIcon className={classes.iconos}/>} titulo="VIDEOS" 
                texto="0" color="rgba(248,80,50,1)" font="white"/>
            </Grid>

            <Grid container spacing={1} className={classes.container}  xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="SUBSCRISTORES" texto="962" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="VISUALIZACIONES" texto="213,341" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="TIEMPO VISUALIZACIÓN" texto="2500 horas" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="PORCENTAJE IMPRESIONES" texto="14.2%" />
                </Grid>
            </Grid>

            <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerTabla}>
                <Graphics/>
            </Grid>
            <Grid item xs={12} className={classes.containerTabla}>
                <TablaMaterial data={data}/>
            </Grid>
        </Grid>
      </div>
    );
  }
  
  export default DashBoard;
  