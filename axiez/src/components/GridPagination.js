import * as React from 'react';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import { green, red, orange, pink, purple, grey ,blue } from '@mui/material/colors';
import MyContext from "../MyContext.js";
import { API_URL , axieQuery, GetAxiesInfo2,GetAxiesInfo } from "../Requests.js";
import { useMutation } from "react-query";
import { request } from "graphql-request";
import { makeStyles } from '@mui/styles';

const getBack = (params) =>{ return params.row.parts[2].name }

const getMouth = (params) =>{ return params.row.parts[3].name }
const getHorn = (params) =>{ return params.row.parts[4].name }

const applyColor= (params) => {
    var aux = '';
    if(params.field === 'class')
        aux = params.value
    else if (params.field === 'back')
        aux = params.row.parts[2].class
    else if (params.field === 'mouth')
        aux = params.row.parts[3].class
    else if (params.field === 'horn')
        aux = params.row.parts[4].class
    else if (params.field === 'parts')
        aux = params.row.parts[5].class

    //console.log(params.field)
    switch(aux){
        case "Plant":
                return 'Plant';
            break;
            case "Beast":
                return 'Beast';
            break;
            case "Aquatic":
                return 'Aqua';
            break;
            case "Bird":
                return 'Bird';
            break;
            case "Reptile":        
                return 'Reptile';
            break;
            case "Dawn":   
                return 'Dawn';
            break;
            case "Dusk":
                return 'Dusk';
            break;
            case "Mech":
                return 'Mech';
            break;
            case "Bug":
                return 'Bug';
            break;
    }
}
const useStyles = makeStyles({
    root: {
      '& .Plant': {
        backgroundColor: green[400]
      },
      '& .Beast': {
        backgroundColor: orange[400]
      },
      '& .Aqua': {
        backgroundColor: blue[500]
      },
      '& .Bird': {
        backgroundColor: pink[300]
      },
      '& .Reptile': {
        backgroundColor: purple[400]
      },
      '& .Dawn': {
        backgroundColor: blue[900]
      },
      '& .Dusk': {
        backgroundColor: '#39ACC5'
      },
      '& .Mech': {
        backgroundColor: grey[400]
      },
      '& .Bug': {
        backgroundColor: red[700]
      }
    },
  });

function loadServerRows(page, data){
    return new Promise((resolve) => {
        
    (async () => {  console.log(" l: " + data.length + " page :" + page); 

        setTimeout( () => {
            resolve(data.slice(page * 50), (page + 1) * 50);
        }, Math.random() * 250 + 100);
    })();
    
    }); 
}

let from = 0, size = 1000, sort = 'PriceAsc', auctionType = 'Sale'
let total = []
let totalsize = 0
function parsing(response){
    const { AxieGene } = require("agp-npm/dist/axie-gene");
    totalsize = response.total <= 2000?response.total:2000;
    for( var i = 0; i < response.results.length; i++){
        var aux =  response.results[i];
        var act = {}
        if(aux.hasOwnProperty('battleInfo') && aux.battleInfo.banned)continue;
        act.id = aux.id
        act.class = aux.class
        act.breedCount = aux.breedCount
        act.currentPriceUSD = Number(aux.auction.currentPriceUSD)
        act.hp = Number(aux.stats.hp)
        act.speed = Number(aux.stats.speed)
        act.skill = Number(aux.stats.skill)
        act.morale = Number(aux.stats.morale)

        var axieParts = aux.parts;
        var energy = axieParts.map(i => i.abilities).flat().map(x => x.energy).reduce((a,b) => a + b,0)
        var attack = axieParts.map(i => i.abilities).flat().map(x => x.attack).reduce((a,b) => a + b,0)
        var defense = axieParts.map(i => i.abilities).flat().map(x => x.defense).reduce((a,b) => a + b,0)
       
        act.energy = energy
        act.attack = attack
        act.defense = defense
        var listAxieParts = []
        const axieGene = new AxieGene(aux.genes)
       
        if(act.purity !== "")act.purity  = axieGene.getGeneQuality();
        for(var j = 0 ; j < axieParts.length ; j++){
            if(axieParts[j].hasOwnProperty('abilities')){
                var axieAuxParts = {}
                axieAuxParts.name = axieParts[j].name
                axieAuxParts.class = axieParts[j].class
                axieAuxParts.type = axieParts[j].type
                if(axieParts[j].abilities.length > 0){
                    axieAuxParts.name2 = axieParts[j].abilities[0].name
                    axieAuxParts.attack = axieParts[j].abilities[0].attack
                    axieAuxParts.defense = axieParts[j].abilities[0].defense
                    axieAuxParts.energy = axieParts[j].abilities[0].energy
                }
                
                listAxieParts.push(axieAuxParts);
            }
        }
        act.parts = listAxieParts
        total.push(act);
    }
    console.log(total.length);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
export default function GridPagination(){
    const{ criteria } = React.useContext(MyContext);
    const classes = useStyles();
    
    //const {data, error, isLoading, isSuccess} = GetAxiesInfo(requestP)
      //console.log(isSuccess)
      // console.log(isLoading)
    
    const[ page, setPage] = React.useState(0);
    const[ rows, setRows] = React.useState([]);
    const[ loading, setLoading] = React.useState(false);
   // if(isSuccess) parsing(data.axies)
    
   
 
    React.useEffect( () => {
        setPage(0);
        (async () => {
            from = 0; size = 100; total =[]; 
            //console.log("aqui"); setPage(0); setRows([]); setLoading(true);
        do {
            let requestP = {from, size, sort, auctionType, criteria}
            
            const data = await request(API_URL, axieQuery, requestP)
            parsing(data.axies)
            //console.log( "Aqui from :" + from);
            from+=size;
        } while (from <= totalsize && from <= 2000);
        
        })().catch(e => { console.error(e.message) });
    },[criteria]);
        
/*
    request(API_URL, axieQuery,requestP)
    .then(data => parsing(data.axies))
    .then(data => setPage(data))
    .then(data => loadServerRows(page, total))
    .then(data => setRows(data))
    .then(data => setLoading(false))
*/

const pageChange = (newPage) =>{ 
    console.log(newPage)
    setPage(newPage)
}

    React.useEffect( () => {
       
        let active = true;   
        (async () => {
            setLoading(true);
            await sleep(2500);
            const newRows = await loadServerRows(page,total);
            //console.log("from :" + from + " ," + " totalsize:  "+ totalsize + " size:" +  total.length);
            if(!active) return;
            setRows(newRows);
            setLoading(false);
        }
        )();
        return ()  => {
            active = false;    
        }
    },[ page, total]);


  return (
        <div style={{  width: '100%'}}  className={classes.root}>
            <DataGrid
            rows={rows}
            columns={[
                {
                    field: "id",
                    headerName: "id",
                    renderCell: (params) => (
                    <div onClick={() => { window.open('https://marketplace.axieinfinity.com/axie/' + params.value) }}> {params.value}</div>
                    ),
                    Width: 100
                },
                {
                    field: "class",
                    headerName: "class",
                    renderCell: (params) => (
                      <div>
                        {(() => {
                            return (<div> {params.value}</div>); 

                        })()}
                     </div>
                    ),
                    Width: 69,
                    cellClassName: applyColor 
                       
                },
                {
                    field: "breedCount",
                    headerName: "breed",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),
                    width: 70
                },
                {
                    field: "attack",
                    headerName: "attack",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),"type": "number",
                    Width: 20
                },
                {
                    field: "defense",
                    headerName: "defense",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),"type": "number",
                    Width: 20
                },
                {
                    field: "energy",
                    headerName: "energy",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),
                    Width: 20
                },
                {
                    field: "purity",
                    headerName: "purity",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),
                    Width: 20
                },
                {
                    field: "currentPriceUSD",
                    headerName: "USD",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),
                    Width: 40
                },
                {
                    field: "hp",
                    headerName: "hp",
                    renderCell: (params) => (
                        
                    <div> {params.value}</div>
                    ),
                    Width: 10
                },
                {
                    field: "speed",
                    headerName: "speed",
                    renderCell: (params) => (
                    <div > {params.value}</div>
                    ),
                    Width: 10
                },
                {
                    field: "skill",
                    headerName: "skill",
                    renderCell: (params) => (
                    <div > {params.value}</div>
                    ),
                    Width: 10
                },
                {
                    field: "morale",
                    headerName: "morale",
                    renderCell: (params) => (
                    <div> {params.value}</div>
                    ),
                    Width: 10
                },
                {
                    field: "back",
                    headerName: "back",
                    renderCell: (params) => (
                        
                    <div>{(() => {
                    })()} {params.value}</div>
                    ),
                    Width: 30, cellClassName: applyColor , valueGetter: getBack 
                },
                {
                    field: "mouth",
                    headerName: "mouth",
                    renderCell: (params) => (
                    <div > {params.value}</div>
                    ),
                    Width: 30,cellClassName: applyColor ,valueGetter: getMouth
                },
                {
                    field: "horn",
                    headerName: "horn",
                    renderCell: (params) => (
                    <div > {params.value}</div>
                    ),
                    Width: 30,cellClassName: applyColor,valueGetter: getHorn
                },
                {
                    field: "parts",
                    headerName: "tail",
                    renderCell: (params) => (
                    <div > {params.value[5].name}</div>
                    ),
                    Width: 30,cellClassName: applyColor
                }
                ]}
            pagination
            pageSize={100}
            rowsPerPageOptions={[100]}
            rowCount={totalsize}
            paginationMode="server"
            onPageChange={pageChange}
            page={page}
            components={{
                Toolbar: GridToolbar,
              }}
            loading={loading}
            />
        </div>
  );
}