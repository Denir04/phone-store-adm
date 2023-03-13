import axios from "axios";

export async function getClientes(query){
    let qs = '';
    for(const key in query){
        if(query[key] === "") continue;
        const param = new URLSearchParams({[key] : query[key]}).toString();
        qs+=param+"&";
    }
    const urlRequest = `http://localhost:3333/clientes?${qs}`;
    return await
        axios.get(urlRequest)
        .then(res => res.data)
        .catch(err => err)
}

export async function getOneCliente(id){
    return await 
    axios.get(`http://localhost:3333/clientes?clienteid=${id}`)
        .then(res => res.data)
        .catch(err => err)
}


export async function patchStatus(id){
    const cliente = await 
    axios.get(`http://localhost:3333/clientes?clienteid=${id}`)
        .then(res => res.data)
        .catch(err => err)
    const newCliente = {...cliente[0], status: cliente[0].status === "ATIVO" ? "INATIVO" : "ATIVO"}
    await axios.patch(
        `http://localhost:3333/cliente/${id}`,
        newCliente
    )
    return null;
}
