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

  function getMenusItems(array, personName,theme){
    return array.map((value) => {                    
        switch(value.type){
         case "plant":
              return <MenuItem key={value.name} value={value.name} sx={{ color: green[600]}} style={getStyles(value.name, personName, theme)}>
                 {value.name}
                 </MenuItem>;   
         case "beast":
             return <MenuItem key={value.name} value={value.name} sx={{ color: orange[400]}} style={getStyles(value.name, personName, theme)}>
                 {value.name}
                 </MenuItem>;
         case "aquatic":
             return <MenuItem key={value.name} value={value.name} sx={{ color: blue[500]}} style={getStyles(value.name, personName, theme)}>
                 {value.name}
                 </MenuItem>;
         case "bird":
              return <MenuItem key={value.name} value={value.name} sx={{ color: pink[300]}} style={getStyles(value.name, personName, theme)}>
             {value.name}
             </MenuItem>;
         case "reptile":        
             return <MenuItem key={value.name} value={value.name} sx={{ color: purple[400]}} style={getStyles(value.name, personName, theme)}>
             {value.name}
             </MenuItem>;
         case "bug":
             return <MenuItem key={value.name} value={value.name} sx={{ color: red[700]}} style={getStyles(value.name, personName, theme)}>
             {value.name}
             </MenuItem>;
        }
    });
  }

function SelectSkills() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [backs2, setBacks] = React.useState([]);
    
    const handleChange = (event) => {
      const {
        target: { value},
      } = event;
      setBacks(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


    const history = useHistory()
    React.useEffect(() =>{
        const params = new URLSearchParams(window.location.search)
        if(backs2.length != 0){ 
            params.delete("parts")
            params.append("parts", backs2)
        }
        else params.delete("parts")

        history.push({search: params.toString()});
    },[backs2]);
    return (
        <div>
        <FormControl  sx={{ minWidth: 200 , maxWidth: 237, marginBottom:0.4}}>
          <InputLabel id="backs">Backs</InputLabel>
          <Select labelId="backs" id="back" multiple
            value={backs2} onChange={handleChange} input={<OutlinedInput label="Backs" />}
            MenuProps={MenuProps}> { getMenusItems(backs, backs2,theme) }
          </Select>
        </FormControl>
        
        <FormControl  sx={{ minWidth: 200 , maxWidth: 237 , marginBottom:0.4}}>
          <InputLabel id="mouths">Mouths</InputLabel>
          <Select labelId="mouths" id="mouth" multiple
            value={personName} onChange={handleChange} input={<OutlinedInput label="Mouths" />}
            MenuProps={MenuProps}> { getMenusItems(mouths, personName,theme) }
          </Select>
        </FormControl>

        <FormControl  sx={{ minWidth: 200 , maxWidth: 237 , marginBottom:0.4}}>
          <InputLabel id="horns">Horns</InputLabel>
          <Select labelId="horns" id="horn" multiple
            value={personName} onChange={handleChange} input={<OutlinedInput label="Horns" />}
            MenuProps={MenuProps}> { getMenusItems(horns, personName,theme) }
          </Select>
        </FormControl>

        <FormControl  sx={{ minWidth: 200 , maxWidth: 237 , marginBottom:0.4}}>
          <InputLabel id="tails">Tails</InputLabel>
          <Select labelId="tails" id="tail" multiple
            value={personName} onChange={handleChange} input={<OutlinedInput label="Tails" />}
            MenuProps={MenuProps}> { getMenusItems(tails, personName,theme) }
          </Select>
        </FormControl>
        </div>
    );            
}

export default SelectSkills;