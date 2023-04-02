import React, { useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom';
import { getOneCliente, postStatus } from '../../api/clientes'
import FilterButton from '../../components/FilterButton';

import styles from "./ViewCliente.module.css"

export async function loader({params}){
  const cliente = await getOneCliente(params.clienteId);
  return { cliente };
}

export async function action({params, request}){
  const formData = await request.formData();
  const cliente = await postStatus(params.clienteId, formData.get("status"));
  return cliente;
}


const ViewCliente = () => {
  const {cliente} = useLoaderData();
  const [wantChange, setWantChange] = useState(false);
  const [buttonMsg, classButton] = 
    cliente["status"] === "Ativo" ?
    ["Inavitar Cliente", "btn-inativar"] :
    ["Ativar Cliente", "btn-ativar"];
  
  const handleWantChange = (e) => {
    e.preventDefault();
    setWantChange(true);
  }

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Informações Cliente #{cliente["clienteId"]}</h1>
      <article className={styles["box-cliente"]}>
          <div className={styles["box-header"]}>
            <h2>{cliente["nome"]}</h2>
            <span>{cliente["status"]}</span>
          </div>
          <div className={styles["box-body"]}>
            <p>Data de Nascimento: <span>{cliente["dataNascimento"]}</span></p>
            <p>Genero: <span>{cliente["genero"]}</span></p>
            <p>CPF: <span>{cliente["cpf"]}</span></p>
            <p>E-mail: <span>{cliente["email"]}</span></p>
            <p>Telefone: <span>{cliente["telefone"]}</span></p>
          </div>
      </article>
      {!wantChange ? (
        <form onSubmit={handleWantChange} className={styles["flex"]}>
        <FilterButton textButton={buttonMsg} classButton={classButton}/>
        </form>      
      ): (
        <div>
          <h2 className={styles["confirm-title"]}>Você tem certaza que deseja realizar esta operação?</h2>
          <Form method="post" className={styles["flex"]} onSubmit={() => setWantChange(false)}>
            <input hidden type="text" name='status' defaultValue={cliente["status"]}/>
            <FilterButton button={true} textButton={"Cancelar"} onClick={() => setWantChange(false)}/>
            <FilterButton textButton={buttonMsg} classButton={classButton} submit/>
          </Form>
        </div>
      )}    
    </div>
  )
}

export default ViewCliente;