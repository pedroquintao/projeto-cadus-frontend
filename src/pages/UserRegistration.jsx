import { useContext, useEffect } from "react"
import { Button } from "../components/Button/Button"
import { Form } from "../components/Form/Form"
import { Input } from "../components/Input/Input"
import { UserContext } from "../context/UserContext"

export const UserRegistration = () => {

    const { createUser, userName, setUserName, handleNameChange  } = useContext(UserContext)
    useEffect(() => {setUserName('')}, [])
    return (
        <>
            <h1>Cadastrar Usuário</h1>
            <Form>
                <Input onChange={handleNameChange} value={userName}/>
                <Button onClick={createUser}>Cadastrar</Button>
            </Form>
        </>
    )
}