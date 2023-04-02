import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { postLogin } from '../api/clientes';

import styles from "./Root.module.css";

const Root = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    async function login(){
      const response = await postLogin("johndoe@phonestore.com","123456");
      if(response.token) {
        sessionStorage.setItem("token", response.token);
        setShow(<Outlet/>);
      }
    }
    login();
  },[]);

  return (
    <div className={styles["container"]}>
        <header></header>
        <main>
          {show}
        </main>
        <footer></footer>
    </div>
  )
}

export default Root;