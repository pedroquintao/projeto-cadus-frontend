import styled from "styled-components"
import { Button } from "../Button/Button"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Input } from "../Input/Input";

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
`;

const ModalBoxStyle = styled.div`
    padding: 1em;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.white};
`;

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
`;

const TextAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2em;
    flex-grow: 3;
    font-size: ${props => props.$fontSize};
`;

const ButtonAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1em;
    flex-grow: 1;
`;

export const Modal = ({children, $fontSize}) => {

    const { modalData, closeModal  } = useContext(ModalContext);
    const { updateUserInput, handleUpdateInputChange, updateUser} = useContext(UserContext);

    return (
        <>
            <ModalBoxStyle>
                <CloseButtonStyle onClick={closeModal}>
                    &times;
                </CloseButtonStyle>
                <TextAreaStyle $fontSize={$fontSize}>
                    { children }
                </TextAreaStyle>
                <ButtonAreaStyle>
                    {modalData.primaryButtonText &&
                        <Link to={modalData.primaryButtonLink}>
                            <Button onClick={closeModal} >{modalData.primaryButtonText}</Button>
                        </Link>}
                    {modalData.secundaryButtonText && 
                        <Link to={modalData.secundaryButtonLink}>
                            <Button onClick={closeModal} $secundary={'true'}>{modalData.secundaryButtonText}</Button>
                        </Link>}
                    {modalData.updateButtonText && 
                        <>
                            <Input onChange={handleUpdateInputChange} value={updateUserInput}/>
                            <Link to={modalData.updateButtonLink}>
                                <Button onClick={() => {console.log('ID: ',modalData.user._id); updateUser(modalData.user)}} $secundary={'true'}>{modalData.updateButtonText}</Button>
                            </Link>
                        </>
                    }
                </ButtonAreaStyle>
            </ModalBoxStyle>
            <BackdropStyle onClick={closeModal} />
        </>
    )    
}