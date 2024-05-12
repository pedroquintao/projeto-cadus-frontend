import { Link } from "react-router-dom"
import { Button } from "../components/Button/Button"

export const MainPage = () => {
    return (
        <>
            <h1>Bem vindo ao Gerenciador de Usuários!</h1>
            <p>Você deseja cadastrar um novo usuário, ou visualizar a lista de usuários cadastrados?</p>
            <div>
                <Link to={"/cadastro"}>
                    <Button>Cadastrar Usuários</Button>
                </Link>
                <Link to={"/lista"}>
                    <Button>Listar Usuários</Button>
                </Link>
            </div>
        </>
    )
}