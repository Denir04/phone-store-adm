import React from 'react'
import { Link } from 'react-router-dom';

import styles from "./Table.module.css"

const Table = ({data}) => {
  return (
    <div className={styles["table"]}>
        <div key={"header"} className={styles["header"]}>
            <span>Código</span>
            <span>Nome</span>
            <span>Gênero</span>
            <span>Data de Nascimento</span>
            <span>Status</span>
        </div>
        {data && data.map(dt => 
            <div key={dt.clienteId} className={styles["row"]}>
                <span>{dt.clienteId}</span>
                <span>{dt.nome}</span>
                <span>{dt.genero}</span>
                <span>{dt.dataNascimento}</span>
                <span>{dt.status}</span>
                <Link className={styles["view-link"]} to={`view/${dt.clienteId}`}>Visualizar</Link>    
            </div>
        )}
    </div>
  )
}

export default Table;