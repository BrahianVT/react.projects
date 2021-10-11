import React from 'react';
import {Line} from 'react-chartjs-2';
import '../assets/css/graphics.css'
function Graphics() {
    const data={
        labels:["Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets:[
            {
                label : "Horas Visualización por Mes",
                fill:false,
                backgroundColor:'rgba(73,155,234,1)',
                borderColor:'rgba(73,155,234,1)',
                pointBorderColor:'rgba(73,155,234,1)',
                pointBorderWidth:1,
                pointHoverRadius:5,
                pointHoverBackgroundColor:'rgba(73,155,234,1)',
                pointHoverBorderColor: 'rgba(73,155,234,1)',
                pointRadius:1,
                pointHitRadius:10,
                data: [.17, 19,156 ,345 ,2354]
            }     
        ]
    }
    return (
       <div className="containerGrafica">
           <Line  data ={data}/>
       </div>
    );
}

export default Graphics;