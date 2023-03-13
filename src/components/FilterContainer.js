import React from 'react'

import styles from "./FilterContainer.module.css"

const FilterContainer = ({children}) => {
  return (
    <div className={styles["container"]}>
      {children}
    </div>
  )
}

export default FilterContainer;