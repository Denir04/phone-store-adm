import axios from "axios";

export async function postLogin(email, senha){
    const response = await 
    axios.post(`http://localhost:3333/admin/login`,{email, senha})
        .then(res => res.data)
        .catch(err => err)
    return response;
}

export async function getClientes(query){
    let qs = '';
    for(const key in query){
        if(query[key] === "") continue;
        const param = new URLSearchParams({[key] : query[key]}).toString();
        qs+=param+"&";
    }
    const urlRequest = `http://localhost:3333/admin/customers?${qs}`;
    const token = sessionStorage.getItem("token")
    console.log(urlRequest);
    return await
        axios.get(urlRequest,{headers:{"Authorization" : `Bearer ${token}`}})
        .then(res => res.data)
        .catch(err => err)
}

export async function getOneCliente(id){
    const token = sessionStorage.getItem("token")
    return await 
    axios.get(`http://localhost:3333/admin/customers/${id}`,{headers:{"Authorization" : `Bearer ${token}`}})
        .then(res => res.data)
        .catch(err => err)
}


export async function postStatus(id, status){
    const token = sessionStorage.getItem("token")
    let urlRequest = "";
    if(status === "Ativo") urlRequest = `http://localhost:3333/admin/customers/${id}/inactivate`;
    else if(status === "Inativo") urlRequest = `http://localhost:3333/admin/customers/${id}/activate`;
    const cliente = await 
    axios.post(urlRequest,{},{headers:{"Authorization" : `Bearer ${token}`}})
        .then(res => res.data)
        .catch(err => err)
    return cliente;
}
