import { useContext, useEffect } from "react";
import { List } from "../components/List/List";
import { UserContext } from "../contexts/UserContext";
import { Input } from "../components/Input/Input";
import { ThemeContext } from "styled-components";

export const UserList = () => {

    const { getUsers, filtredList, userFilter, setUserFilter, handleFilterChange } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    useEffect(() => { setUserFilter(''); getUsers(); }, []);

    return (
            <>
                <h1>LISTA DE USUÁRIOS</h1>
                <p style={{ color: theme.colors.darkGray }}>Utilize o filtro para obter os usuários desejados:</p>
                <Input style={{ marginBottom: theme.spacing.xl }} onChange={handleFilterChange} value={userFilter} placeholder={'Filtrar'} />
                <List list={filtredList} />
            </>
    );
};
