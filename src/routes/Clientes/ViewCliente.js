import React, { useState } from 'react'
import { useLoaderData, Form} from 'react-router-dom';
import { getOneCliente, patchStatus } from '../../api/clientes'
import FilterButton from '../../components/FilterButton';

import styles from "./ViewCliente.module.css"

export async function loader({params}){
  const cliente = await getOneCliente(params.clienteId);
  return { cliente };
}

export async function action({params}){
  const cliente = await patchStatus(params.clienteId);
  return cliente;
}


const ViewCliente = () => {
  const {cliente} = useLoaderData();
  const [wantChange, setWantChange] = useState(false);
  const [buttonMsg, classButton] = 
    cliente[0]["status"] === "ATIVO" ?
    ["Inavitar Cliente", "btn-inativar"] :
    ["Ativar Cliente", "btn-ativar"];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setWantChange(true);
  }

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Informações Cliente #{cliente[0]["clienteid"]}</h1>
      <article className={styles["box-cliente"]}>
          <div className={styles["box-header"]}>
            <h2>{cliente[0]["nome"]}</h2>
            <span>{cliente[0]["status"]}</span>
          </div>
          <div className={styles["box-body"]}>
            <p>Data de Nascimento: <span>{cliente[0]["datanascimento"]}</span></p>
            <p>Genero: <span>{cliente[0]["genero"]}</span></p>
            <p>CPF: <span>{cliente[0]["numerodocumento"]}</span></p>
            <p>E-mail: <span>{cliente[0]["email"]}</span></p>
            <p>Telefone: <span>{cliente[0]["numerotelefone"]}</span></p>
          </div>
      </article>
      {!wantChange ? (
        <form onSubmit={handleSubmit} className={styles["flex"]}>
        <FilterButton textButton={buttonMsg} classButton={classButton}/>
        </form>      
      ): (
        <div>
          <h2 className={styles["confirm-title"]}>Você tem certaza que deseja realizar esta operação?</h2>
          <Form method='post' className={styles["flex"]} onSubmit={() => {setWantChange(false)}}>
            <FilterButton button={true} textButton={"Cancelar"} onClick={() => setWantChange(false)}/>
            <FilterButton textButton={buttonMsg} classButton={classButton}/>
          </Form>
        </div>
      )}    
    </div>
  )
}

export default ViewCliente;