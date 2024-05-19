import { useContext, useEffect } from "react";
import { List } from "../components/List/List";
import { Input } from "../components/Input/Input";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "styled-components";
import { Modal } from "../components/Modal/Modal";
import { Button } from "../components/Button/Button";
import { ModalContext } from "../contexts/ModalContext";

export const UserList = () => {
    const { userFilter, setUserFilter, filtredList, handleFilterChange, getUsers, updateUserInput, setUpdateUserInput, updateUser } = useContext(UserContext);
    const { modalVisibility } = useContext(ModalContext)
    const theme = useContext(ThemeContext);

    useEffect(() => {
        setUserFilter('');
        getUsers();
    }, []);

    const devStyle = {
        transform: 'translateY(-15vh)', 
        position: 'relative'
    }

    const pStyle = {
        color: theme.colors.darkGray
    };

    return (
        <>
            <div style={devStyle}>
                <h1 >LISTA DE USUÁRIOS</h1>
                <p style={pStyle}>Digite no campo abaixo para filtrar a lista de usuários:</p>
                <Input onChange={handleFilterChange} value={userFilter} placeholder={'Filtrar'} />
                <List list={filtredList} />
            </div>
        </>
    );
};

