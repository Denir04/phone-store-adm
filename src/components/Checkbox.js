import React from 'react'
import styles from "./Checkbox.module.css"

const Checkbox = ({label, name, value}) => {
  return (
    <div className={styles["container"]}>
        <input type="checkbox" name={name} value={value}/>
        <label>{label}</label>
    </div>
  )
}

export default Checkbox