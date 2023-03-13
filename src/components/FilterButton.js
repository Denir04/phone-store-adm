import React from 'react'

import styles from "./FilterButton.module.css"

const FilterButton = ({textButton, classButton, onClick}) => {
  return ( 
    <button
        className={`${styles["button"]} ${styles[classButton]}`}
        type='submit'
        onClick={onClick}
    >
        {textButton}
    </button>
  )
}

export default FilterButton