import styled from "styled-components"

const InputStyle = styled.input`
    padding: 2em 1em;
    display: block;
    width: 100%;
    box-sizing: border-box;
    background: ${props => props.theme.colors.white};
    border-style: none;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.gray};
    height: 40px;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    transition: border-color 0.4s ease-in;
    transition: color 0.2s ease-in;
    /* background-color: red; */

    &:focus {
        outline: none; 
        border-color: transparent;
        border-bottom: 1px solid ${props => props.theme.colors.aquaHover};
        color: ${props => props.theme.colors.darkGray};

    }
` 
export const Input = ({ onChange, value, placeholder, style }) => {
    return (
        <>
            <InputStyle style={style} onChange={onChange} value={value} placeholder={placeholder}/>
        </>
    )
}
