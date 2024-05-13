import { styled } from "styled-components"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Form = ({ children }) => {

    return (
        <FormStyle onSubmit={(e) => e.preventDefault()}>
            { children }
        </FormStyle>
    )
}