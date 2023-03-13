import React from 'react'
import styles from "./BoxFilterContainer.module.css"

const BoxFilterContainer = ({title, children}) => {
  return (
    <div className={styles["container"]}>
        <p>{title}</p>
        <article>
          {children}
        </article>
    </div>
  )
}

export default BoxFilterContainer