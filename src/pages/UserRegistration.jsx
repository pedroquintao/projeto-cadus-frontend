import { useContext, useEffect } from "react";
import { Button } from "../components/Button/Button";
import { Form } from "../components/Form/Form";
import { Input } from "../components/Input/Input";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "styled-components";

export const UserRegistration = () => {
    const { userName, setUserName, handleNameChange, createUser } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        setUserName('');
    }, [setUserName]);

    const formStyle = {
        marginBottom: theme.spacing.xl
    };

    return (
        <>
            <h1>CADASTRO DE USUÁRIO</h1>
            <p>Insira o nome de usuário para realizar o cadastro:</p>
            <Form>
                <Input style={formStyle} onChange={handleNameChange} value={userName} placeholder={'Nome*'} />
                <Button onClick={createUser}>CADASTRAR</Button>
            </Form>
        </>
    );
};
