import React from 'react'
import { Form, useLoaderData } from 'react-router-dom';
import { getClientes } from '../../api/clientes';

import BoxFilterContainer from '../../components/BoxFilterContainer';
import Checkbox from '../../components/Checkbox';
import FilterButton from '../../components/FilterButton';
import FilterContainer from '../../components/FilterContainer';
import IntervalInput from '../../components/IntervalInput';
import SearchFor from '../../components/SearchFor';
import Table from '../../components/Table';
import styles from "./SectionClientes.module.css"


export async function loader({request}){
  const url = new URL(request.url)
  const query = Object.fromEntries(url.searchParams)
  if(url.searchParams.getAll("status").length){
    query.status = url.searchParams.getAll("status");
  }
  if(url.searchParams.getAll("genero").length){
    query.genero = url.searchParams.getAll("genero");
  }
  const clientes = await getClientes(query);
  if(clientes.name === "AxiosError") return [];
  return { clientes };
}


const Clientes = () => {
  const { clientes } = useLoaderData();

  return (
    <div className={styles["container"]}>
      <h1>Clientes</h1>
      <section>
        <article>
          <Form>
            <FilterContainer>
                <SearchFor/>
            </FilterContainer>
            <FilterContainer>
              <FilterButton textButton={"Aplicar Filtros"}/>
              <BoxFilterContainer title={"Status"}>
                <Checkbox label={"ATIVO"} name={"status"} value={"ATIVO"} />
                <Checkbox label={"INATIVO"} name={"status"} value={"INATIVO"} />
              </BoxFilterContainer>
              <BoxFilterContainer title={"Gênero"}>
                <Checkbox label={"Masculino"} name={"genero"} value={"masculino"} />
                <Checkbox label={"Feminino"} name={"genero"} value={"feminino"} />
              </BoxFilterContainer>
              <BoxFilterContainer title={"Data de Nascimento"}>
                <IntervalInput type="date" label="Minimo" name={"datanascimentomin"}/>
                <IntervalInput type="date" label="Maximo" name={"datanascimentomax"}/>
              </BoxFilterContainer>
            </FilterContainer>
          </Form>
        </article>
        <article>
          <Table data={clientes}/>
        </article>
      </section>
    </div>
  )
}

export default Clientes;