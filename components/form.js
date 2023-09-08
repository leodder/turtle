import React from 'react'


//component
import FreeSolo from './search.js'
import SelectLabels from './select.js'
import CheckboxGroup from './checkbox.js'

//hook
import { useState } from 'react';

//image
import Image from 'next/image'

//styles
import styles from './form.module.sass'

//RWD
import { useMediaQuery } from '@mui/material';

export default function Form() {
    const isXsScreen = useMediaQuery('(max-width:767px)');
    const [selectedCity, setSelectedCity] = useState(''); // 看選了哪個城市
  
    // 處理選擇城市的函數
    const handleCitySelect = (city) => {
      setSelectedCity(city);
    };
  
    return (
      <div className={`${styles.bgcolor}`}>
        <div className={`${styles.row1}`}>
          <div className={`${styles.col1}`}>
            <div className={`${styles.title}`}>
              <div className={`${styles.pcolor}`}>站點資訊</div>
            </div>
            <div className={`${styles.row2}`}>

            {isXsScreen ? (
              <>
              <FreeSolo />
              <SelectLabels onCitySelect={handleCitySelect} className={`${styles.formcontrol}`} />
              </>
            ) : (
              <>
              <SelectLabels onCitySelect={handleCitySelect} className={`${styles.formcontrol}`} />
              <FreeSolo />
              </>
            )}
              {/* <SelectLabels onCitySelect={handleCitySelect} className={`${styles.formcontrol}`} />
              <FreeSolo /> */}
              </div>
              <div>
              {/* 根據選擇顯示或隱藏 CheckboxGroup */}
              {selectedCity === '台北市' && <CheckboxGroup />}
              </div>
            </div>
          <div className={`${styles.col2}`}>
            <Image src="/ride.png" width={501.98} height={171.5} alt="ubike" className={`${styles.imgrwd}`} />
          </div>
        </div>
      </div>
    );
  }
