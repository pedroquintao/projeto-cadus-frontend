import styled from "styled-components"

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
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 2.5em;
    list-style: none;
    padding: 0.5em 1em;
    margin: 0;
    border: 1px solid ${props => props.theme.colors.lightGray};
    border-left: 12px solid ${props => props.theme.colors.blue};
    border-radius: 0 16px 16px 16px;
    font-size: ${props => props.theme.spacing.xm};
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    box-sizing: border-box;
    transition: color 0.2s ease-in;


    &:hover {
        border-color: ${props => props.theme.colors.gray};
        border-left-color: ${props => props.theme.colors.blueHover};
    }
`;

const TextStyle = styled.p`
    color: ${props => props.theme.colors.lightGray};
    font-size: 40px;
    align-self: center;
`


export const List = ({ list, style }) => {
    
    return (
            <UlStyle style={style} >{
                list[0] ? [...list].reverse().map((item, index) => { 
                    return( 
                            <LiStyle key={index}>
                                { item.name }
                            </LiStyle>)}) : 
                            <TextStyle>Não existem usuários cadastrados no momento</TextStyle>
                        }
            </UlStyle>
    )
}