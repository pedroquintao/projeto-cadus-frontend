import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../contexts/UserContext"
import { ModalContext } from "../../contexts/ModalContext"
import { FaEdit, FaTrashAlt, FaEllipsisH  } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";


const DivStyle = styled.div`
    display: flex;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    min-height: 100%;
    gap: ${props => props.theme.spacing.xs};
    
    
    `
const KebabBtnStyle = styled.button`
    display: block;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.darkGray}
    /* background-color: purple; */

`

const ActionButton = styled.button`
    background-color: transparent;
    border: none;
    display: none;
    color: ${props => props.theme.colors.darkGray};

    &:hover {
        color: ${props => props.theme.colors.gray}
    }

`

export const ActionBar = ({ user }) => {

    const { deleteUser, handleUpdateUser } = useContext(UserContext);
    const { openModal } = useContext(ModalContext)

    const buttonSize = '24px'
    
    return (
        <DivStyle>
            <KebabBtnStyle className="kebab-btn"><FaEllipsisH size={buttonSize}/></KebabBtnStyle>
            <ActionButton className="edit-btn" 
                          user={user} 
                          onClick={() => {openModal(handleUpdateUser(user))}}><FaEdit size={buttonSize}/></ActionButton>
            <ActionButton className="delete-btn" 
                          user={user} 
                          onClick={() => deleteUser(user)}><FaTrashAlt size={buttonSize}/></ActionButton>
        </DivStyle>
    )
}