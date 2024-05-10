import { styled } from "styled-components"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
`
export const Form = ({ children }) => {

    return (
        <FormStyle>
            { children }
        </FormStyle>
    )
}