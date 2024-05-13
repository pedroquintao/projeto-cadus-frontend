import { useContext, useEffect } from "react";
import { List } from "../components/List/List";
import { Input } from "../components/Input/Input";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "styled-components";

export const UserList = () => {
    const { userFilter, setUserFilter, filtredList, handleFilterChange, getUsers } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        setUserFilter('');
        getUsers();
    }, []);

    const headerStyle = {
        color: theme.colors.darkGray
    };

    const inputStyle = {
        marginBottom: theme.spacing.xl
    };

    return (
        <>
            <h1>LISTA DE USUÁRIOS</h1>
            <p style={headerStyle}>Utilize o filtro para obter os usuários desejados:</p>
            <Input style={inputStyle} onChange={handleFilterChange} value={userFilter} placeholder={'Filtrar'} />
            <List list={filtredList} />
        </>
    );
};

