import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// styles
import styles from './select.module.sass';

export default function SelectLabels({ onCitySelect }) {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);

    // 通知父元件選擇的城市
    onCitySelect(selectedCity);
  };
    //select的外框線效果暫時處理不掉QAQ
  return (
    <FormControl className={`${styles.formcontrol}`}>
      <Select
        value={city}
        onChange={handleChange}
        displayEmpty
        className={`${styles.bgcolor}`}
      >
        <MenuItem value="" className={`${styles.selectcity}`}>選擇縣市</MenuItem>
        <MenuItem value="台北市">台北市</MenuItem>
        <MenuItem value="台北市">台北市</MenuItem>
        <MenuItem value="台北市">台北市</MenuItem>
        <MenuItem value="新竹科學園區">新竹科學園區</MenuItem>
        <MenuItem value="台北市">台北市</MenuItem>
        <MenuItem value="台北市">台北市</MenuItem>
      </Select>
    </FormControl>
  );
}
