import * as React from "react";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import { backs,tails,horns, mouths} from '../Parts.js';
import { green, red, orange, pink, purple ,blue } from '@mui/material/colors';
import  { useHistory } from 'react-router-dom';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  function getMenusItems(array, personName,theme,typePart){
    return array.map((value) => {                    
        switch(value.type){
         case "plant":
              return <MenuItem key={typePart+'-'+value.name} value={typePart+'-'+value.name} sx={{ color: green[600]}} style={getStyles(value.name, personName, theme)}>
                 {value.name}
                 </MenuItem>;   
         case "beast":
             return <MenuItem key={typePart+'-'+value.name} value={typePart+'-'+value.name} sx={{ color: orange[400]}} style={getStyles(value.name, personName, theme)}>
                 {value.name}
                 </MenuItem>;
         case "aquatic":
             return <MenuItem key={typePart+'-'+value.name} value={typePart+'-'+value.name} sx={{ color: blue[500]}} style={getStyles(value.name, personName, theme)}>
                 {value.name}
                 </MenuItem>;
         case "bird":
              return <MenuItem key={typePart+'-'+value.name} value={typePart+'-'+value.name} sx={{ color: pink[300]}} style={getStyles(value.name, personName, theme)}>
             {value.name}
             </MenuItem>;
         case "reptile":        
             return <MenuItem key={typePart+'-'+value.name} value={typePart+'-'+value.name} sx={{ color: purple[400]}} style={getStyles(value.name, personName, theme)}>
             {value.name}
             </MenuItem>;
         case "bug":
             return <MenuItem key={typePart+'-'+value.name} value={typePart+'-'+value.name} sx={{ color: red[700]}} style={getStyles(value.name, personName, theme)}>
             {value.name}
             </MenuItem>;
        }
    });
  }

function SelectSkills() {
    const theme = useTheme();
    const [parts, setParts] = React.useState([]);
    
    const handleChange = (event) => {
      const {
        target: { value},
      } = event;
      setParts(value);
    };

    const history = useHistory()
    React.useEffect(() =>{
        const params = new URLSearchParams(window.location.search)
        if(parts.length != 0){ 
            params.delete("parts")
            params.append("parts", parts)
        }
        else params.delete("parts")
        history.push({search: params.toString()});
    },[parts]);
    return (
        <div>
        <FormControl  sx={{ minWidth: 200 , maxWidth: 237, marginBottom:0.4}}>
          <InputLabel id="backs">Backs</InputLabel>
          <Select labelId="backs" id="back" multiple name= 'back'
            value={parts} onChange={handleChange} input={<OutlinedInput label="Backs" />}
            MenuProps={MenuProps}> { getMenusItems(backs, parts,theme,'back') }
          </Select>
        </FormControl>
        
        <FormControl  sx={{ minWidth: 200 , maxWidth: 237 , marginBottom:0.4}}>
          <InputLabel id="mouths">Mouths</InputLabel>
          <Select labelId="mouths" id="mouth" multiple
            value={parts} onChange={handleChange} input={<OutlinedInput label="Mouths" />}
            MenuProps={MenuProps}> { getMenusItems(mouths, parts,theme,'mouth') }
          </Select>
        </FormControl>

        <FormControl  sx={{ minWidth: 200 , maxWidth: 237 , marginBottom:0.4}}>
          <InputLabel id="horns">Horns</InputLabel>
          <Select labelId="horns" id="horn" multiple
            value={parts} onChange={handleChange} input={<OutlinedInput label="Horns" />}
            MenuProps={MenuProps}> { getMenusItems(horns, parts,theme,'horn') }
          </Select>
        </FormControl>

        <FormControl  sx={{ minWidth: 200 , maxWidth: 237 , marginBottom:0.4}}>
          <InputLabel id="tails">Tails</InputLabel>
          <Select labelId="tails" id="tail" multiple
            value={parts} onChange={handleChange} input={<OutlinedInput label="Tails" />}
            MenuProps={MenuProps}> { getMenusItems(tails, parts,theme,'tail') }
          </Select>
        </FormControl>
        </div>
    );            
}

export default SelectSkills;