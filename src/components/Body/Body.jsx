import { styled } from "styled-components"

const BodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Body = ({ children }) => {
    return (
    <BodyStyle>
        { children }
    </BodyStyle>
    )
}