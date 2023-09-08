import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';

//styles
import styles from './checkbox.module.sass';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';


function CheckboxGroup() {
  const [selectAll, setSelectAll] = useState(true);
  const [options, setOptions] = useState({
    北投區: true,
    士林區: true,
    中山區: true,
    內湖區: true,
    大同區: true,
    松山區: true,
    萬華區: true,
    中正區: true,
    大安區: true,
    信義區: true,
    南港區: true,
    文山區: true,
    // 
  });


  const handleSelectAllChange = () => {
    const updatedSelectAll = !selectAll;
    setSelectAll(updatedSelectAll);

    const updatedOptions = {};
    for (const key in options) {
      updatedOptions[key] = updatedSelectAll;
    }
    setOptions(updatedOptions);
  };


  const handleOptionChange = (optionName) => (event) => {
    const { checked } = event.target;
    setOptions({
      ...options,
      [optionName]: checked,
    });


    if (!checked && selectAll) {
      setSelectAll(false);
    }
  };

  //搞半天用sass跟css都改不了，直接問gpt大神
  const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    '& .MuiIconButton-root': {
      color: '#AEAEAE', // 外框線顏色
    },
    '&.Mui-checked': {
      color: '#B5CC22', // checked狀態的顏色
      // '&:hover': {
      //   backgroundColor: '#B5CC22', 
        // checked&hover狀態的顏色（hover時很好笑，有點捨不得弄掉)
      // },
    },
  }));

//   const theme = createTheme({
//     palette: {
//       ochre: {
//         main: '#677510',
//         light: '#B5CC22',
//         dark: '#F6F6F6',
//         contrastText: '#ffffff',
//       },
//     },
//   });

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <label className={`${styles.selectall}`}>
      <StyledCheckbox
        type="checkbox"
        defaultChecked={selectAll} // 使用 defaultChecked 設定初始勾選狀態
        onChange={handleSelectAllChange}
        // color="success"
        className={`${styles.customCheckbox}`}
        />
        全部勾選
      </label>
      <span></span>
      {/* <br /> */}
      {Object.keys(options).map((optionName) => (
        <label key={optionName} className={`${styles.selectone}`}>
        <StyledCheckbox
            checked={options[optionName]}
            onChange={handleOptionChange(optionName)}
            value={optionName}
            className={`${styles.customCheckbox}`}
            // sx={{color:'ochre.light'}}
            // color="secondary"
          />
          {optionName}
        </label>
      ))}
    </div>
    // {/* </ThemeProvider> */}
  );
}

export default CheckboxGroup;
