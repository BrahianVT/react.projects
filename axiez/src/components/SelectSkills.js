import * as React from "react";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { backs } from '../Parts.js';
import { green, red, orange, pink, purple, grey ,blue } from '@mui/material/colors';
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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

function SelectSkills() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    
    /*backs.forEach((value, key) => {
        console.log(value.name)
    })*/

    
    
    const handleChange = (event) => {
      const {
        target: { value},
      } = event;
      setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div>
        <FormControl  sx={{width: 200 }}>
          <InputLabel id="demo-multiple-name-label">Backs</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Backs" />}
            MenuProps={MenuProps}>
           
            { backs.map((value) => {               
              
                   switch(value.type){
                    case "plant":
                         return <MenuItem key={value.name} value={value.name} sx={{ color: green[600]}} style={getStyles(value.name, personName, theme)}>
                            {value.name}
                            </MenuItem>;
                    break;
                    case "beast":
                        return <MenuItem key={value.name} value={value.name} sx={{ color: orange[400]}} style={getStyles(value.name, personName, theme)}>
                            {value.name}
                            </MenuItem>;
                    break;
                    case "aquatic":
                        return <MenuItem key={value.name} value={value.name} sx={{ color: blue[500]}} style={getStyles(value.name, personName, theme)}>
                            {value.name}
                            </MenuItem>;
                    break;
                    case "bird":
                         return <MenuItem key={value.name} value={value.name} sx={{ color: pink[300]}} style={getStyles(value.name, personName, theme)}>
                        {value.name}
                        </MenuItem>;
                    break;
                    case "reptile":        
                        return <MenuItem key={value.name} value={value.name} sx={{ color: purple[400]}} style={getStyles(value.name, personName, theme)}>
                        {value.name}
                        </MenuItem>;
                    break;
                    case "bug":
                        return <MenuItem key={value.name} value={value.name} sx={{ color: red[700]}} style={getStyles(value.name, personName, theme)}>
                        {value.name}
                        </MenuItem>;
                    break;
                   }


            }) }
          </Select>
        </FormControl>
      </div>
    );            
}

export default SelectSkills;