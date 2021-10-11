import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyleTableCell = withStyles(()=>({
    root:{
        color: 'white',
        background: 'black',
        textAlign: 'center'
    },
    body:{
        fontSize: 14
    }
    }))(TableCell);

function TablaMaterial(props) {
    return (
      <TableContainer>
          <Table>
          <TableHead>
              <TableRow>
                  <StyleTableCell> Video</StyleTableCell>
                  <StyleTableCell> Fecha Publicación</StyleTableCell>
                  <StyleTableCell> Número de Visualizaciónes</StyleTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {
                  props.data.map( element =>(
                    <TableRow key={element.id}>
                       <TableCell><img src={element.imagen} alt="" width="35px" height="25px"/>{"  "}{element.video}</TableCell>
                       <TableCell align="center">{element.fecha}</TableCell>
                       <TableCell align="center">{element.visualizaciones}</TableCell> 
                     </TableRow>
                  ))
              }
          </TableBody>
          </Table>
      </TableContainer>
    );
}

export default TablaMaterial;