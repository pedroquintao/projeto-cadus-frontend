import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../contexts/UserContext"
import { ModalContext } from "../../contexts/ModalContext"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { Form } from "react-router-dom"

const DivStyle = styled.div`
    display: flex;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    min-height: 100%;
    gap: ${props => props.theme.spacing.xs};

    &:hover .kebab-btn {
        display: none;
    }

    &:hover .edit-btn,
    &:hover .delete-btn {
        display: block;
    }
`
const KebabBtnStyle = styled.button`
    display: block;
    /* background-color: purple; */

`

const ActionButton = styled.button`
    display: none;
`
export const ActionBar = ({ user }) => {

    const { deleteUser, updadeUser, handleUpdateUser } = useContext(UserContext);
    const { openModal } = useContext(ModalContext)

    
    return (
        <DivStyle>
            <KebabBtnStyle className="kebab-btn">Kebab</KebabBtnStyle>
            <ActionButton className="edit-btn" 
                          user={user} 
                          onClick={() => {openModal(handleUpdateUser())}}>Edit</ActionButton>
            <ActionButton className="delete-btn" 
                          user={user} 
                          onClick={() => deleteUser(user)}>Delete</ActionButton>
        </DivStyle>
    )
}