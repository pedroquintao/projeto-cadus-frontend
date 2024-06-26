import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Row } from "react-grid-system";
import { ThemeContext } from "styled-components";

export const MainPage = () => {
    const theme = useContext(ThemeContext);

    const buttonContainerStyle = {
        gap: theme.spacing.xl,
        marginTop: theme.spacing.xl
    };

    return (
        <>
            <h1>Bem vindo(a) ao GERENCIADOR DE USUÁRIOS!</h1>
            <p>Deseja cadastrar um novo usuário, ou visualizar a lista de usuários cadastrados?</p>
            <Row justify='center' align='center' style={buttonContainerStyle}>
                <Link to={"/cadastro"}>
                    <Button>CADASTRO</Button>
                </Link>
                <Link to={"/lista"}>
                    <Button $secundary='true'>LISTA</Button>
                </Link>
            </Row>
        </>
    );
};
