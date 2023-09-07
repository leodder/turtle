import React from 'react'


//component
import FreeSolo from './search.js'
import SelectLabels from './select.js'
import CheckboxGroup from './checkbox.js'


//image
import Image from 'next/image'

//styles
import styles from './form.module.sass'

export default function Form() {
  return (
    <div className={`${styles.bgcolor}`}>
        <div className={`${styles.row1}`}>
            <div className={`${styles.col1}`}>
                <div className={`${styles.title}`}>
                    <div className={`${styles.pcolor}`}>站點資訊</div>
                </div>
                <div className={`${styles.row2}`}>
                    <SelectLabels />
                    <FreeSolo />
                    
                </div>
                <div>
                <CheckboxGroup />
                </div>
            </div>
            <div className={`${styles.col2}`}>
                <Image  src="/ride.png" width={501.98} height={171.5} alt="ubike" />
            </div>
        </div>
    </div>
  )
}
