import { useContext, useEffect } from "react"
import { List } from "../components/List/List"
import { UserContext } from "../context/UserContext"
import { Input } from "../components/Input/Input"

export const UserList = () => {

    const { getUsers, filtredList, userFilter, setUserFilter, handleFilterChange } = useContext(UserContext);

    useEffect(() => {setUserFilter(''); getUsers()}, [])

    return (
        <>
            <h1>Listar Usuários</h1>
            <Input onChange={handleFilterChange} value={userFilter}/>
            <List title={"Usuários Cadastrados"} list={filtredList}/>
        </>
    )
}