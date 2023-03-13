import React from 'react'
import { Outlet } from 'react-router-dom';

import styles from "./styles.module.css";

const Root = () => {
  return (
    <div className={styles["container"]}>
        <header></header>
        <main>
          <Outlet/>
        </main>
        <footer></footer>
    </div>
  )
}

export default Root;