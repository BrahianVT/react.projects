import React from "react";
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { green, red, orange, pink, purple, grey, black ,blue } from '@mui/material/colors';
import { useHistory, useParams } from 'react-router-dom'
                
function Hbar(){
    const [classes, setClasses] = React.useState(new Set());
    const [queryClasses, setQueryClasses] = React.useState("");
    const history = useHistory()         
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
     
     React.useEffect(() =>{
        const params = new URLSearchParams()
        if(classes.size !== 0){
           params.append("classes", queryClasses);                 
        } else {
           params.delete("classes");                    
        }
        
        history.push({ search: params.toString()});
     }, [classes, history, queryClasses])

     const { params2 } = useParams()
        console.log("Parametros " + params2)
        
    return (
       <List sx={{  maxWidth: 300, bgcolor: 'background.paper' }}>
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
       </List>                    
    );
}

export default Hbar;