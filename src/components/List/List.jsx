import styled from "styled-components"
import { ActionBar } from "../AcrtionBar/ActionBar";

const UlStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: 0;
    padding: 0;
    margin-top: 50px;
    width: 100%;
    max-height: 30vh;
    overflow-y: auto;
    position: absolute;
    top: 100%;
`;

const LiStyle = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${props => props.theme.spacing.s};
    width: 100%;
    max-height: 10vh;
    list-style: none;
    padding: 0.5em;
    margin: 0;
    border: 1px solid ${props => props.theme.colors.lightGray};
    border-left: 12px solid ${props => props.theme.colors.blue};
    border-radius: 0 16px 16px 16px;
    text-align: left;
    
    box-sizing: border-box;
    transition: color 0.2s ease-in;

    /* background-color: yellow; */


    &:hover {
        border-color: ${props => props.theme.colors.gray};
        border-left-color: ${props => props.theme.colors.blueHover};
    }
`;

const PStyle = styled.p`
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${props => props.theme.spacing.xm};
    
    /* background-color: blue; */
    &:hover {
        overflow-x: auto;
    }

`

const TextStyle = styled.p`
    color: ${props => props.theme.colors.lightGray};
    font-size: 40px;
    align-self: center;
`


export const List = ({ list, style }) => {
    
    return (
            <UlStyle style={style} >{
                list[0] ? [...list].reverse().map((user, index) => { 
                    return( 
                            <LiStyle key={index} _id={user._id}>
                                <PStyle>{ user.name }</PStyle>
                                <ActionBar user={user}/>
                            </LiStyle>)}) : 
                            <TextStyle>Não existem usuários cadastrados no momento</TextStyle>
                        }
            </UlStyle>
    )
}