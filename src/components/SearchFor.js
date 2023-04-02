import React, { useState } from 'react'
import { normalizeCpfNumber, normalizePhoneNumber } from '../constants/mask';

import styles from "./SearchFor.module.css"

const SearchFor = () => {
  const [searchFor, setSearchFor] = useState("clienteId");
  const [valueSearch, setValueSearch] = useState("");

  const handleChange = (value) => {
      switch(searchFor){
        case "cpf": 
          setValueSearch(normalizeCpfNumber(value));
        break;
        case "telefone":
          setValueSearch(normalizePhoneNumber(value));
        break;
        default:
          setValueSearch(value);
      }
  }

  return (
    <div className={styles["container"]}>
        <div>
            <label>Buscar por</label>
            <select 
              className={styles["select"]} 
              onChange={(e) => {setSearchFor(e.target.value)}}
            >
                <option value={"clienteId"}>Código</option>
                <option value={"cpf"}>CPF</option>
                <option value={"nome"}>Nome</option>
                <option value={"email"}>E-mail</option>
                <option value={"telefone"}>Telefone</option>
            </select>
        </div>
        <div>
            <input 
              type={"text"}
              className={styles["input"]} 
              name={searchFor}
              onChange={(e) => handleChange(e.target.value)}
              value={valueSearch}
            />
        </div>
    </div>
  )
}

export default SearchFor;