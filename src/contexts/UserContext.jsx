import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { ModalContext } from "./ModalContext";
import { Form } from "../components/Form/Form";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

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

    const handleUpdateUser = () => {
        const modalData = {
                    message: <>
                                <p>Digite o novo nome do usuário:</p>
                                <Input onChange={(e) => setUpdateUserInput(e.target.value)} />
                                <Button onClick={() => console.log(updateUserInput)}>Atualizar</Button>
                             </>
                            }
        return modalData
                        }

    const createUser = async (e) => {
        e.preventDefault();
        let modalData = {
            message: `Carregando...`,
            primaryButtonText: false,
            primaryButtonLink: false,
            secundaryButtonText: false,
            secundaryButtonLink: false
        }
        openModal(modalData);
        try {
            const userData = { name: userName };
            const res = await api.post("http://localhost:8080/users", userData);
            console.log("Usuário cadastrado com sucesso!");
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
                secundaryButtonText: false,
                secondaryButtonLink: false
            }
            openModal(modalData);
            console.error("Erro ao cadastrar usuário: ", err);
        }
    };

    const getUsers = async () => {
        let modalData = {
            message: `Carregando...`,
            primaryButtonText: false,
            primaryButtonLink: false,
            secundaryButtonText: false,
            secondaryButtonLink: false
        }
        openModal(modalData);
        try {
            const res = await api.get("http://localhost:8080/users");
            setUserList(res.data);
            setFiltredList(res.data);
            closeModal();
        } catch (err) {
            modalData = {
                message: `Erro ao adquirir a lista de usuários:`,
                primaryButtonText: 'OK',
                primaryButtonLink: '/lista',
                secundaryButtonText: false,
                secondaryButtonLink: false
            }
            console.error("Erro ao adquirir a lista de usuários: ", err);
            openModal(modalData);
            setUserList([{name: false}]);
            handleFilterUser();

        }
    };

    const updateUser = async (user, newUser) => {
        try {
            const res = await api.patch(`http://localhost:8080/users/${user._id}`, { name: newUser });
            window.alert('Usuário atualizado com sucesso!');

        } catch(e) {
            window.alert("Erro ao atualizar usuário!")
        }
    }

    const deleteUser = async (user) => {
        let modalData = {
            message: `Carregando...`,
            primaryButtonText: false,
            primaryButtonLink: false,
            secundaryButtonText: false,
            secondaryButtonLink: false
        };
        openModal(modalData);

        try {
            modalData = {
                message: `Usuário ${user.name} excluído com sucesso!`,
                primaryButtonText: "OK",
                primaryButtonLink: "/lista",
                secundaryButtonText: false,
                secondaryButtonLink: false
            };
            await api.delete(`http://localhost:8080/users/${user._id}`);
            await getUsers();
            openModal(modalData);


        } catch (e) {
            modalData = {
                message: `Erro ao excluir o usuário ${user.name}.`,
                primaryButtonText: "OK",
                primaryButtonLink: "/lista",
                secundaryButtonText: false,
                secondaryButtonLink: false
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
        handleNameChange,
        handleFilterChange,
        handleFilterUser,
        handleUpdateUser,
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
