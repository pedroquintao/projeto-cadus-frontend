import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.white};
    font-weight: 700;
    font-size: ${props => props.theme.spacing.m};
`;

const UlStyle = styled.ul`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    padding: 0 16vw;
    margin: 0;
`;

const LinkStyle = styled(NavLink)`
    display: block;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: ${props => props.theme.colors.aquaHover};
    }

    &.active {
        color: ${props => props.theme.colors.aquaHover};
    }
`;

const LiStyle = styled.li`
    list-style-type: none;
`

export const Header = () => {

    return (
        <HeaderStyle>
                <UlStyle>
                    <LiStyle>
                        <LinkStyle to={"/"} title="Tela Inicial">HOME</LinkStyle>
                    </LiStyle>
                    <LiStyle>
                        <LinkStyle to={"/cadastro"} title="Tela de Cadastro">CADASTRAR USUÁRIO</LinkStyle>
                    </LiStyle>
                    <LiStyle>
                        <LinkStyle to={"/lista"} title="Lista de Usuários">LISTAR USUÁRIOS</LinkStyle>
                    </LiStyle>
                </UlStyle>
        </HeaderStyle>
    )
}