import styled from "styled-components"
import { Button } from "../Button/Button"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"

const BackdropStyle = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`

const ModalBoxStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    display: flex;
    border-radius: 16px;
    flex-direction: column;
    justify-content: space-between;
    transform: translate(-50%, -50%);
    z-index: 3;
    background-color: ${props => props.theme.colors.white};
`

const CloseButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.darkBlue};
    margin-left: auto;
    width: 5rem;
    height: 5rem;
    font-size: 5rem;
    &:hover {
        color: ${props => props.theme.colors.blueHover};
        cursor: pointer;
    }
`
const TextAreaStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2em;
    flex-grow: 2;
`
const ButtonAreaStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-grow: 1;
`

export const Modal = ({children}) => {

    const { closeModal } = useContext(ModalContext)

    return (
    <>
        <ModalBoxStyle>
            <CloseButtonStyle onClick={closeModal}>
                &times;
            </CloseButtonStyle>
            <TextAreaStyle>
                {children}
            </TextAreaStyle>
            <ButtonAreaStyle>
                <Button onClick={closeModal}>OK</Button>
            </ButtonAreaStyle>
        </ModalBoxStyle>
        <BackdropStyle onClick={closeModal} />
    </>
    )    
}