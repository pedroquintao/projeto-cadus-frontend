import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api";
import { ModalContext } from "./ModalContext";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const { openModal } = useContext(ModalContext) 

    const [userName, setUserName] = useState("");
    const [userList, setUserList] = useState([])
    const [userFilter, setUserFilter] = useState('')
    const [filtredList, setFiltredList] = useState([{}])

    const handleNameChange = (event) => {
        setUserName(event.target.value)
    }
    
    const handleFilterChange = (event) => {
        setUserFilter(event.target.value);
    }

    const filterUser = () => {
        setFiltredList(userList.filter(user => user.name.toLowerCase().includes(userFilter.toLowerCase())))
}
    const createUser = async (e) => {
        e.preventDefault();
        const userData = { "name": `${userName}` };
                
        await api.post("http://localhost:8080/users", userData)
        .then(res => {
            console.log("Usuário: ", userName, " Cadastrado com Sucesso!\nA lista atualizada de usuários é: \n", res.data);
            setUserName('');
            setFiltredList(res.data);
            openModal('O usuário foi cadastrado com sucesso!');
        })
        .catch(err => {
            setUserName('');

            openModal('Erro ao cadastrar usuário!');

            if(err.response) {
                console.error("Erro ao adquirir a lista de usuários: ", err.response)
            }
            else if(err.request) {
                console.error("Erro de requisição: ", err.request)
                
            }
            else {
                console.error("Erro: ", err.message)
            }
        });
    }
    
    const getUsers = async () => {
        await api.get("http://localhost:8080/users")
        .then(res => { setUserList(res.data); setFiltredList(res.data); })
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
        
        useEffect(() => {filterUser()},[userFilter])

        const context = { userName,
            setUserName,
            userList,
            setUserList,
            handleNameChange,
            getUsers,
            createUser,
            userFilter,
            setUserFilter,
            filterUser,
            filtredList,
            setFiltredList,
            handleFilterChange
        }

    return (
        <UserContext.Provider value={context}>
            { children }
        </UserContext.Provider>
    )
}