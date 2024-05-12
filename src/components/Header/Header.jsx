import { Link } from "react-router-dom"
import { styled } from "styled-components"

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100vw;
    background-color: black;
`
const UlStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 200px;
`
export const Header = () => {

    return (
        <HeaderStyle>
                <UlStyle>
                    <li>
                        <Link to={"/"}>HOME</Link>
                    </li>
                    <li>
                        <Link to={"/cadastro"}>CADASTRAR USUÁRIO</Link>
                    </li>
                    <li>
                        <Link to={"/lista"}>LISTAR USUÁRIOS</Link>
                    </li>
                </UlStyle>
        </HeaderStyle>
    )
}