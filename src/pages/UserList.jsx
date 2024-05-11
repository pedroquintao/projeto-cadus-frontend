import { useContext } from "react"
import { List } from "../components/List/List"
import { UserContext } from "../context/UserContext"

export const UserList = () => {

    const { userList } = useContext(UserContext)
    
    return (
        <>
            <h1>Listar Usuários</h1>
            <List title={"Usuários Cadastrados"} list={userList}/>
        </>
    )
}