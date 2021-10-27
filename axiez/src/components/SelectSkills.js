import * as React from "react";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { backs } from '../Parts.js';
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
            {backs.map((value) => (
               
              <MenuItem key={value.name} value={value.name} style={getStyles(value.name, personName, theme)}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );            
}

export default SelectSkills;