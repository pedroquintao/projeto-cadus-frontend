import styled from "styled-components"

const InputStyle = styled.input`
    display: block;
    width: 100%;
    padding: 2em 1em;
    height: 40px;
    box-sizing: border-box;
    background: ${props => props.theme.colors.white};
    border-style: none;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.gray};
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    transition: border-color 0.4s ease-in, color 0.2s ease-in;

    &:focus {
        outline: none;
        border-color: transparent;
        border-bottom: 1px solid ${props => props.theme.colors.aquaHover};
        color: ${props => props.theme.colors.darkGray};
    }
`;

export const Input = ({ onChange, value, placeholder, style }) => {
    return (
        <>
            <InputStyle style={style} onChange={onChange} value={value} placeholder={placeholder}/>
        </>
    )
}
