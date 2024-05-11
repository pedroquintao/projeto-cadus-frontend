import { createContext, useEffect, useState } from "react"
import api from "../services/api";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [userName, setUserName] = useState("");
    const [userList, setUserList] = useState([{}])

    // const createUser = async (e) => {
    //     e.preventDefault();

    //     const userData = { name: userName };

    //     await api.post("/cadastro", userData)
    //              .then(res => {
    //                 setUserList(res.data);
    //                 console.log("Usuário: ", userName, " Cadastrado com Sucesso!\nA lista atualizada de usuários é: \n", res.data)})
    //              .catch(err => {
    //                 if(err.response){

    //                     console.error("Erro ao adquirir a lista de usuários: ", err.response)
    //                 }
    //                 else if(err.request) {
    //                     console.error("Erro de requisição: ", err.request)

    //                 }
    //                 else{
    //                     console.error("Erro: ", err.message)

    //                 }
    //              });
    // }

    const getUsers = async () => {
        await api.get("http://localhost:8080/livros")
                 .then(res => {console.log(res.data);
                                setUserList(res.data)
                 })
                    
                 .catch(err => {
                    if(err.response) {
                        console.error("Erro ao adquirir a lista de usuários: ", err.response)
                    }
                    else if(err.request) {
                        console.error("Erro de requisição: ", err.request)
                    }
                    else {
                        console.error("Erro: ", err.message)
                    }
                 })
    }

    const context = { userName,
                      setUserName,
                      userList,
                      setUserList
                    }

    useEffect(() => {getUsers()}, [])

    return (
        <UserContext.Provider value={context}>
            { children }
        </UserContext.Provider>
    )
}