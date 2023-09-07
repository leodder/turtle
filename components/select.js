import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//styles
import styles from './select.module.sass'

export default function SelectLabels() {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (

      <FormControl
       className={`${styles.formcontrol} ${styles.customFormControl}`}
       sx={{ outline: 'none', border: 'none' }}
    //   sx={{ width: 175, height: 40 }}
      >
        <Select
          value={city}
          onChange={handleChange}
          displayEmpty
          sx={{ width: 175, height: 40, outline: 'none', border: 'none' }}
          className={`${styles.bgcolor} ${styles.customSelect}`}
        //   placeholder="新竹科學園區"
        >
          <MenuItem value="台北市">台北市</MenuItem>
          <MenuItem value="台北市">台北市</MenuItem>
          <MenuItem value="台北市">台北市</MenuItem>
          <MenuItem value="新竹科學園區" >新竹科學園區</MenuItem>
          <MenuItem value="台北市">台北市</MenuItem>
          <MenuItem value="台北市">台北市</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>

  );
}