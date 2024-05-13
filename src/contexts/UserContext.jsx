import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { ModalContext } from "./ModalContext";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const { openModal } = useContext(ModalContext);

    const [userName, setUserName] = useState("");
    const [userList, setUserList] = useState([]);
    const [userFilter, setUserFilter] = useState('');
    const [filtredList, setFiltredList] = useState([]);

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleFilterChange = (event) => {
        setUserFilter(event.target.value);
    };

    const handleFilterUser = () => {
        setFiltredList(userList.filter(user => user.name.toLowerCase().includes(userFilter.toLowerCase())));
    };

    const createUser = async (e) => {
        e.preventDefault();
        try {
            const userData = { name: userName };
            const res = await api.post("http://localhost:8080/users", userData);
            console.log("Usuário cadastrado com sucesso!");
            setUserName('');
            setFiltredList(res.data);
            openModal('O usuário foi cadastrado com sucesso!');
        } catch (err) {
            setUserName('');
            openModal('Erro ao cadastrar usuário!');
            console.error("Erro ao cadastrar usuário: ", err);
        }
    };

    const getUsers = async () => {
        try {
            const res = await api.get("http://localhost:8080/users");
            setUserList(res.data);
            setFiltredList(res.data);
        } catch (err) {
            console.error("Erro ao adquirir a lista de usuários: ", err);
        }
    };

    useEffect(() => {
        handleFilterUser();
    }, [userFilter]);

    useEffect(() => {
        getUsers();
    }, []);

    const context = { 
        userName,
        setUserName,
        userList,
        setUserList,
        userFilter,
        setUserFilter,
        filtredList,
        setFiltredList,
        handleNameChange,
        handleFilterChange,
        handleFilterUser,
        createUser,
        getUsers
    };

    return (
        <UserContext.Provider value={context}>
            { children }
        </UserContext.Provider>
    );
};
