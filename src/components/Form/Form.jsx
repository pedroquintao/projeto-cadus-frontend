import { useContext } from "react"
import { styled } from "styled-components"
import { UserContext } from "../../context/UserContext"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
`
export const Form = ({ children }) => {

    const { createUser } = useContext(UserContext)

    return (
        <FormStyle onSubmit={createUser}>
            { children }
        </FormStyle>
    )
}