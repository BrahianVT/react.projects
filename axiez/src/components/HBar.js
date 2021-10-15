import * as React from "react";
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { green, red, orange, pink, purple, grey ,blue } from '@mui/material/colors';
import { Grid  ,Slider,Stack , Button } from '@mui/material';
import MuiInput from '@mui/material/Input';
import { useHistory, useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { CleanHandsTwoTone } from "@mui/icons-material";

const Input = styled(MuiInput)`
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
              classes.add("plant")
              else classes.delete("plant")      
           break;
           case "beast":
              if(event.target.checked)
                 classes.add("beast")
              else classes.delete("beast")         
           break;
           case "aqua":
              if(event.target.checked)
                    classes.add("aqua")
              else classes.delete("aqua")         
              break;
           case "bird":
              if(event.target.checked)
                    classes.add("bird")
              else classes.delete("bird")      
              break;
           case "reptile":        
              if(event.target.checked)
                    classes.add("reptile")
              else classes.delete("reptile")         
                 break;
           case "dawn":   
              if(event.target.checked)
                    classes.add("dawn")
              else classes.delete("dawn")         
              break;
           case "dusk":
              if(event.target.checked)
              classes.add("dusk")
              else classes.delete("dusk")      
              break;
           case "mech":
              if(event.target.checked)
                 classes.add("mech")
              else classes.delete("mech")         
           break;
           case "bug":
              if(event.target.checked)
                    classes.add("bug")
              else classes.delete("bug")         
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
     
     
      const parseQuery = (evet) => {    
           console.log("Execute query");
      }
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
                  id='plant' checked={classes.has("plant")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
             Plant
                <Checkbox  sx={{ color: orange[600], '&.Mui-checked': { color: orange[600] },paddingRight: 0}} 
                  id='beast'  checked={classes.has("beast")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Beast
              <Checkbox  sx={{ color: blue[600], '&.Mui-checked': { color: blue[600] },paddingRight: 0}} 
                  id='aqua' checked={classes.has("aqua")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Aqua
          </ListItem>   
          <ListItem key='mids' disablePadding={true} >   
                <Checkbox  sx={{ color: pink[200], '&.Mui-checked': { color: pink[200] },paddingRight: 0}} 
                  id='bird' checked={classes.has("bird")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
             Bird
                <Checkbox  sx={{ color: purple[600], '&.Mui-checked': { color: purple[600] },paddingRight: 0}} 
                  id='reptile'  checked={classes.has("reptile")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Reptile

              <Checkbox  sx={{ color: blue[900], '&.Mui-checked': { color: blue[900] },paddingRight: 0}} 
                  id='dawn' checked={classes.has("dawn")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Dawn
          </ListItem>   
          <ListItem key='backs' disablePadding={true} >   
                <Checkbox  sx={{ color: '#212121', '&.Mui-checked': { color: '#212121' },paddingRight: 0}} 
                  id='dusk' checked={classes.has("dusk")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
             Dusk
                <Checkbox  sx={{ color: grey[400], '&.Mui-checked': { color: grey[400] },paddingRight: 0}} 
                  id='mech'  checked={classes.has("mech")} onChange={handleChange}
                  inputProps={{ 'aria-labelledby': "controlled" }}
                />
              Mech

              <Checkbox  sx={{ color: red[800], '&.Mui-checked': { color: red[800] },paddingRight: 0}} 
                  id='bug' checked={classes.has("bug")} onChange={handleChange}
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
                 <Button variant="contained" color="success" onClick={parseQuery}>Search</Button>
                 <Button variant="contained" color="error" onClick={cleanf}>Clear</Button>
              </Stack>
           </Grid>
           </ListItem>                                                        
       </List>                    
    );
}

export default Hbar;