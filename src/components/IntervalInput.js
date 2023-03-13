import React from 'react'
import styles from "./IntervalInput.module.css"

const IntervalInput = ({label, name, type}) => {
  return (
    <div className={styles["container"]}>
        <label>{label}</label>
        <input 
          name={name?name:"defaultName"} 
          type={type?type:"text"}
        />
    </div>
  )
}

export default IntervalInput;