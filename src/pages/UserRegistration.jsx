import { Button } from "../components/Button/Button"
import { Form } from "../components/Form/Form"
import { UserInput } from "../components/UserInput/UserInput"

export const UserRegistration = () => {
    return (
        <>
            <h1>Cadastrar Usuário</h1>
            <Form>
                <UserInput/>
                <Button>Cadastrar</Button>
            </Form>
        </>
    )
}