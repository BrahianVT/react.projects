import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Typography, CardContent, CardActionArea } from '@material-ui/core';

function CardsHeaders(props) {
    const useStyles= makeStyles(()=>({
        root:{
            textAlign: 'center',
            backgroundColor: props.color
        },
        texto:{
            fontSize: 18,
            color: props.font
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: 22,
            color: props.font
        }
        }));
    const classes= useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                    {props.titulo}
                </Typography>

                <Typography className={classes.texto}>
                    {props.texto}
                </Typography>

            </CardContent>
        </Card>
    );
}

export default CardsHeaders;