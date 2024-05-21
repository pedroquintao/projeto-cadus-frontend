import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { ModalContext } from "./ModalContext";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const { openModal, closeModal } = useContext(ModalContext);

    const [userName, setUserName] = useState("");
    const [userList, setUserList] = useState([]);
    const [userFilter, setUserFilter] = useState('');
    const [filtredList, setFiltredList] = useState([]);
    const [updateUserInput, setUpdateUserInput] = useState('')

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleFilterChange = (event) => {
        setUserFilter(event.target.value);
    };

    const handleFilterUser = () => {
        setFiltredList(userList.filter(user => user.name && user.name.toLowerCase().includes(userFilter.toLowerCase())));
    };

    const handleUpdateInputChange =(e) => {
        setUpdateUserInput(e.target.value);
    }

    const handleUpdateUser = (user) => {
        const modalData = {
                    message: `Digite o novo nome de usuário:`,
                    updateButtonText: 'ATUALIZAR',
                    updateButtonLink: '/lista',
                    user: user
        }
        return modalData
    }

    const createUser = async (e) => {
        e.preventDefault();
        let modalData = {
            message: `Carregando...`,
        }
        openModal(modalData);
        try {
            const userData = { name: userName };
            const res = await api.post("http://localhost:8080/users", userData);
            setUserName('');
            setFiltredList(res.data);

            modalData = {
                message: `Usuário ${userName} cadastrado com sucesso!`,
                primaryButtonText: 'OK',
                primaryButtonLink: '/cadastro',
                secundaryButtonText: 'IR PARA LISTA',
                secundaryButtonLink: '/lista'
            }
            openModal(modalData);
        } catch (err) {
            setUserName('');
            modalData = {
                message: `Erro ao cadastrar usuário ${userName}!`,
                primaryButtonText: 'OK',
                primaryButtonLink: '/cadastro',
            }
            openModal(modalData);
            console.error("Erro ao cadastrar usuário: ", err);
        }
    };

    const getUsers = async () => {
        let modalData = {
            message: `Carregando...`,

        }
        openModal(modalData);
        try {
            const res = await api.get("http://localhost:8080/users");
            setUserList(res.data);
            setFiltredList(res.data);
            closeModal();
        } catch (err) {
            modalData = {
                message: `Erro ao adquirir a lista de usuários.`,
                primaryButtonText: 'OK',
                primaryButtonLink: '/lista',
            }
            console.error("Erro ao adquirir a lista de usuários. ", err);
            openModal(modalData);
            setUserList([{name: false}]);
            handleFilterUser();
        }
    };

    const updateUser = async (user) => {
        const modalData = {
            message: `Carregando...`,
        }
        openModal(modalData)
        try {
            await api.patch(`http://localhost:8080/users/${user._id}`, { name: updateUserInput });
            setUpdateUserInput('')
            await getUsers();

            const modalData = {
                message: `Usuário atualizado com sucesso!`,
                primaryButtonText: 'OK',
                primaryButtonLink: '/lista',
            }
            openModal(modalData)
        } catch(e) {
            const modalData = {
                message: `Erro ao atualizar o usuário.`,
                primaryButtonText: 'OK',
                primaryButtonLink: '/lista',
            }
            openModal(modalData)
        }
    }

    const deleteUser = async (user) => {
        let modalData = {
            message: `Carregando...`,
        };
        openModal(modalData);

        try {
            modalData = {
                message: `Usuário ${user.name} excluído com sucesso!`,
                primaryButtonText: "OK",
                primaryButtonLink: "/lista",
            };
            await api.delete(`http://localhost:8080/users/${user._id}`);
            await getUsers();
            openModal(modalData);


        } catch (e) {
            modalData = {
                message: `Erro ao excluir o usuário ${user.name}.`,
                primaryButtonText: "OK",
                primaryButtonLink: "/lista",
            };
            console.log("Erro ao excluir usuário!");
        }
    }

    useEffect(() => {
        handleFilterUser();
    }, [userFilter]);

    useEffect(() => {
        console.log(updateUserInput);
    }, [updateUserInput]);

    const context = { 
        userName,
        setUserName,
        userList,
        setUserList,
        userFilter,
        setUserFilter,
        filtredList,
        setFiltredList,
        updateUserInput,
        setUpdateUserInput,
        handleNameChange,
        handleFilterChange,
        handleFilterUser,
        handleUpdateUser,
        handleUpdateInputChange,
        createUser,
        getUsers,
        deleteUser,
        updateUser
    };

    return (
        <UserContext.Provider value={context}>
            { children }
        </UserContext.Provider>
    );
};
