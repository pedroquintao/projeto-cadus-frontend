import styled from "styled-components"

const ButtonStyle = styled.button`
    box-sizing: border-box;
    background-color: ${props => (props.$secundary? props.theme.colors.blue : props.theme.colors.aqua)};
    color: white;
    min-width: 250px;
    border-radius: 999px;
    padding: 1em 4em;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    border: none;
    transition: background-color 0.5s ease;

        &:hover {
            background-color: ${props => (props.$secundary? props.theme.colors.blueHover : props.theme.colors.aquaHover)};
            border-color: #00E1B9;
        }
    `
export const Button = ({ children, onClick, style, $secundary }) => {


    return (
        <>
            <ButtonStyle style={style} onClick={onClick} $secundary={$secundary}>
                { children }
            </ButtonStyle>
        </>
    )
}