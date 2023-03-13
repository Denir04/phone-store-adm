import React, { useState } from 'react'

import styles from "./SearchFor.module.css"

const SearchFor = () => {
  const [searchFor, setSearchFor] = useState("clienteid");

  return (
    <div className={styles["container"]}>
        <div>
            <label>Buscar por</label>
            <select 
              className={styles["select"]} 
              onChange={(e) => {setSearchFor(e.target.value)}}
            >
                <option value={"clienteid"}>Código</option>
                <option value={"numerodocumento"}>CPF</option>
                <option value={"nome"}>Nome</option>
                <option value={"email"}>E-mail</option>
                <option value={"numeroTelefone"}>Telefone</option>
            </select>
        </div>
        <div>
            <input 
              type={"text"}
              className={styles["input"]} 
              name={searchFor}
            />
        </div>
    </div>
  )
}

export default SearchFor;