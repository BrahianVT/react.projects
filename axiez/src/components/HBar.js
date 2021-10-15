import * as React from "react";
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { green, red, orange, pink, purple, grey ,blue } from '@mui/material/colors';
import { Grid  ,Slider,Stack , Button } from '@mui/material';
import MuiInput from '@mui/material/Input';
import { useHistory, useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { GetAxiesInfo , API_URL , axieQuery } from "../Requests.js";
import { useMutation , useQuery } from "react-query";
import { request } from "graphql-request";
const Input =  styled(MuiInput)`
  width: 40px;
`;


function Hbar(){
    const [classes, setClasses] = React.useState(new Set())
    const [queryClasses, setQueryClasses] = React.useState("")        
    const [valueHp, setValueHp] = React.useState(27)
    const [valueSpeed, setValueSpeed] = React.useState(27)
    const [valueSkill, setValueSkill] = React.useState(27)
    const [valueMoral, setValueMoral] = React.useState(27)
    const [valueBreed, setValueBreed] = React.useState(7)
    const [valueMystic, setValueMystic] = React.useState(0)
    const [valuePure, setValuePure] = React.useState(1)     
             
    const history = useHistory()
    const handleSliderChange = (event, newValue) => {
          if(event.target.name === '1')setValueHp(newValue);
          if(event.target.name === '2')setValueSpeed(newValue);
          if(event.target.name === '3')setValueSkill(newValue);
          if(event.target.name === '4')setValueMoral(newValue);
          if(event.target.name === '5')setValueBreed(newValue);
          if(event.target.name === '6')setValueMystic(newValue);
          if(event.target.name === '7')setValuePure(newValue);
    };

    const handleInputChange = (event) => {
          if(event.target.name === '1')setValueHp(event.target.value === '' ? '' : event.target.valueAsNumber);
          if(event.target.name === '2')setValueSpeed(event.target.value === '' ? '' : event.target.valueAsNumber > 61?61:event.target.valueAsNumber);
          if(event.target.name === '3')setValueSkill(event.target.value === '' ? '' : event.target.valueAsNumber > 61?61:event.target.valueAsNumber);
          if(event.target.name === '4')setValueMoral(event.target.value === '' ? '' : event.target.valueAsNumber > 61?61:event.target.valueAsNumber);
          if(event.target.name === '5')setValueBreed(event.target.value === '' ? '' : event.target.valueAsNumber > 7?7:event.target.valueAsNumber);
          if(event.target.name === '6')setValueMystic(event.target.value === '' ? '' : event.target.valueAsNumber > 6?6:event.target.valueAsNumber);
          if(event.target.name === '7')setValuePure(event.target.value === '' ? '' : event.target.valueAsNumber > 6?6:event.target.valueAsNumber);
    };
   
    const handleBlur = (event) => {
          setValueHp(valueHp < 21 ?21: valueHp > 61?61:valueHp); 
          setValueSpeed(valueSpeed < 21 ?21: valueSpeed > 61?61:valueSpeed);
          setValueSkill(valueSkill < 21 ?21: valueSkill > 61?61:valueSkill);
          setValueMoral(valueMoral < 21 ?21: valueMoral > 61?61:valueMoral);
          setValueBreed(valueBreed < 0 ?0: valueBreed > 7?7:valueBreed);
          setValueMystic(valueBreed < 0 ?0: valueBreed > 7?7:valueBreed);
          setValueBreed(valueBreed < 0 ?0: valueBreed > 7?7:valueBreed);
     };
    const handleChange = (event) => { 
        switch(event.target.id){
           case "plant":
              if(event.target.checked)
              classes.add("Plant")
              else classes.delete("Plant")      
           break;
           case "beast":
              if(event.target.checked)
                 classes.add("Beast")
              else classes.delete("Beast")         
           break;
           case "aqua":
              if(event.target.checked)
                    classes.add("Aquatic")
              else classes.delete("Aquatic")         
              break;
           case "bird":
              if(event.target.checked)
                    classes.add("Bird")
              else classes.delete("Bird")      
              break;
           case "reptile":        
              if(event.target.checked)
                    classes.add("Reptile")
              else classes.delete("Reptile")         
                 break;
           case "dawn":   
              if(event.target.checked)
                    classes.add("Dawn")
              else classes.delete("Dawn")         
              break;
           case "dusk":
              if(event.target.checked)
              classes.add("Dusk")
              else classes.delete("Dusk")      
              break;
           case "mech":
              if(event.target.checked)
                 classes.add("Mech")
              else classes.delete("Mech")         
           break;
           case "bug":
              if(event.target.checked)
                    classes.add("Bug")
              else classes.delete("Bug")         
              break;
        }
        setClasses(classes)  
        setQueryClasses(Array.from(classes).join(','))
     };

     const cleanf = (event) => {
             classes.clear()
             setClasses(classes)
             setQueryClasses("")
             setValueHp(27)
             setValueSpeed(27)
             setValueSkill(27)
             setValueMoral(27)
             setValueBreed(7)
             setValueMystic(0)
             setValuePure(1)
      }
     
      let  criteria = {
                    breedCount: [],
                    stages:[4],
                    classes:[],
                    pureness:[],
                    numMystic: [],
                    parts:[],
                    hp:[],
                    speed:[],
                    skill: [],
                    morale:[]
        }

      const parseQuery = useMutation(requestP  => {
           const parameters  =  new URLSearchParams(window.location.search);    
           if(parameters.has('classes'))
              criteria.classes = parameters.get('classes').split(",")
           
           if(parameters.has('hp'))
              criteria.hp = [Number(parameters.get('hp')),61]
           if(parameters.has('speed'))
              criteria.speed =  [Number(parameters.get('hp')),61]
           if(parameters.has('skill'))
              criteria.skill =  [Number(parameters.get('skill')),61]
           if(parameters.has('moral'))
              criteria.morale =  [Number(parameters.get('moral')),61]
           if(parameters.has('breeds'))
              criteria.breedCount =  [0, Number(parameters.get('breeds'))]
           if(parameters.has('mystics'))
              criteria.numMystic =  [0, Number(parameters.get('mystics'))]
           if(parameters.has('pureness'))
              criteria.pureness =  [Number(parameters.get('pureness'))]
          
           return  request(API_URL, axieQuery,requestP)
      })

      let from = 0, size = 50, sort = 'PriceAsc', auctionType = 'Sale'
      console.log(" idle " + parseQuery.isIdle);   
      console.log("isLoading " + parseQuery.isLoading);
      if(!parseQuery.isLoading)console.log(parseQuery.data);
      
      let requestP = {from, size, sort, auctionType, criteria}
     /* const {data, error, isLoading, isSuccess} = GetAxiesInfo({from, size, sort, auctionType, criteria})
      if (error) console.log('Something went wrong')
      else console.log(data);
      if (isLoading) console.log('Loading...')*/

     React.useEffect(() =>{
        const params = new URLSearchParams()
        if(classes.size !== 0){
           params.append("classes", queryClasses);                 
        } else {
           params.delete("classes");                    
        }
        if(valueHp > 27){
           params.append("hp", valueHp);                    
        } else {
          params.delete("hp");                   
        }
        if(valueSpeed > 27){
           params.append("speed", valueSpeed);                    
        } else {
          params.delete("speed");                   
        }
       if(valueSkill > 27){
           params.append("skill", valueSkill);                    
        } else {
          params.delete("skill");                   
        } 
        if(valueMoral > 27){
           params.append("moral", valueMoral);                    
        } else {
          params.delete("moral");                   
        }
        if(valueBreed < 7){
           params.append("breeds", valueBreed);                    
        } else {
          params.delete("breeds");                   
        }
        if(valueMystic > 0){
           params.append("mystics", valueMystic);                    
        } else {
          params.delete("mystics");                   
        }
        if(valuePure > 1){
           params.append("pureness", valuePure);                    
        } else {
          params.delete("pureness");                   
        }
        
        history.push({ search: params.toString()});

     }, [classes, history, queryClasses, valueHp, valueSpeed, valueSkill, valueMoral, valueMystic, valueBreed, valuePure])

     
        
    return (
       <List sx={{  maxWidth: 320, bgcolor: 'background.paper' }}>
          <ListItemText primary={"Class"} />                 
         <ListItem key='tanks' disablePadding={true} >   
                <Checkbox  sx={{ color: green[600], '&.Mui-checked': { color: green[600] },paddingRight: 0}} 
                  id='plant' checked={classes.has("Plant")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
             Plant
                <Checkbox  sx={{ color: orange[600], '&.Mui-checked': { color: orange[600] },paddingRight: 0}} 
                  id='beast'  checked={classes.has("Beast")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Beast
              <Checkbox  sx={{ color: blue[600], '&.Mui-checked': { color: blue[600] },paddingRight: 0}} 
                  id='aqua' checked={classes.has("Aquatic")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Aqua
          </ListItem>   
          <ListItem key='mids' disablePadding={true} >   
                <Checkbox  sx={{ color: pink[200], '&.Mui-checked': { color: pink[200] },paddingRight: 0}} 
                  id='bird' checked={classes.has("Bird")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
             Bird
                <Checkbox  sx={{ color: purple[600], '&.Mui-checked': { color: purple[600] },paddingRight: 0}} 
                  id='reptile'  checked={classes.has("Reptile")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Reptile

              <Checkbox  sx={{ color: blue[900], '&.Mui-checked': { color: blue[900] },paddingRight: 0}} 
                  id='dawn' checked={classes.has("Dawn")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Dawn
          </ListItem>   
          <ListItem key='backs' disablePadding={true} >   
                <Checkbox  sx={{ color: '#212121', '&.Mui-checked': { color: '#212121' },paddingRight: 0}} 
                  id='dusk' checked={classes.has("Dusk")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
             Dusk
                <Checkbox  sx={{ color: grey[400], '&.Mui-checked': { color: grey[400] },paddingRight: 0}} 
                  id='mech'  checked={classes.has("Mech")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Mech

              <Checkbox  sx={{ color: red[800], '&.Mui-checked': { color: red[800] },paddingRight: 0}} 
                  id='bug' checked={classes.has("Bug")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Bug
          </ListItem>
          <ListItemText primary={"Stats"} />
         <ListItem sx={{ padding:.4}}>
          <Grid item xs sx={{ paddingRight:3}}>
             <Slider  name="1" sx={{ color: green[600]}} min = {27} max = {61} value={typeof valueHp === 'number' ? valueHp : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valueHp} size="small" onChange={handleInputChange} onBlur={handleBlur} name="1"
              inputProps={{ step: 1, min: 27, max: 61, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
           </ListItem>
           <ListItem sx={{ padding:.4}}>      
           <Grid item xs sx={{ paddingRight:3}}>
             <Slider name="2" sx={{ color: orange[600]}} min = {27} max = {61} value={typeof valueSpeed === 'number' ? valueSpeed : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valueSpeed} size="small" onChange={handleInputChange} onBlur={handleBlur} name="2"
              inputProps={{ step: 1, min: 27, max: 61, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
           </ListItem>
           <ListItem sx={{ padding:.4}}>      
           <Grid item xs sx={{ paddingRight:3}}>
             <Slider name="3" sx={{ color: purple[600]}} min = {27} max = {61} value={typeof valueSkill === 'number' ? valueSkill : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valueSkill} size="small" onChange={handleInputChange} onBlur={handleBlur} name='3'
              inputProps={{ step: 1, min: 27, max: 61, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
           </ListItem>   
           <ListItem sx={{ padding:.4}}>   
           <Grid item xs sx={{ paddingRight:3}}>
             <Slider name="4" sx={{ color: red[800]}} min = {27} max = {61} value={typeof valueMoral === 'number' ? valueMoral : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valueMoral} size="small" onChange={handleInputChange} onBlur={handleBlur} name="4"
              inputProps={{ step: 1, min: 27, max: 61, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
          </ListItem>

          <ListItemText primary={"Breeds"} />
         <ListItem sx={{ padding:.4}}>
          <Grid item xs sx={{ paddingRight:3}}>
             <Slider name="5" min = {0} max = {7} value={typeof valueBreed === 'number' ? valueBreed : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valueBreed} size="small" onChange={handleInputChange} onBlur={handleBlur} name="5"
              inputProps={{ step: 1, min: 0, max: 7, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
           </ListItem>
         <ListItemText primary={"Mystic"} />
         <ListItem sx={{ padding:.4}}>
          <Grid item xs sx={{ paddingRight:3}}>
             <Slider name="6" min = {0} max = {6} value={typeof valueMystic === 'number' ? valueMystic : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valueMystic} size="small" onChange={handleInputChange} name="6"
              inputProps={{ step: 1, min: 0, max: 6, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
           </ListItem>
           <ListItemText primary={"Pureness"} />
         <ListItem sx={{ padding:.4}}>
          <Grid item xs sx={{ paddingRight:3}}>
             <Slider name="7" min = {1} max = {6} value={typeof valuePure === 'number' ? valuePure : 0}
            onChange={handleSliderChange} aria-labelledby="input-slider" />
        </Grid>
           <Grid item>
             <Input value={valuePure} size="small" onChange={handleInputChange} name="7" 
              inputProps={{ step: 1, min: 1, max: 6, type: 'number', 'aria-labelledby': 'input-slider',}} />
           </Grid>
           </ListItem>   

           <ListItem sx={{ padding:.4}}>
           <Grid item>
              <Stack spacing={2} direction="row">
                 <Button variant="contained" color="success" onClick= {() => parseQuery.mutate(requestP)}>Search</Button>
                 <Button variant="contained" color="error" onClick={cleanf}>Clear</Button>
              </Stack>
           </Grid>
           </ListItem>                                                        
       </List>                    
    );
}

export default Hbar;