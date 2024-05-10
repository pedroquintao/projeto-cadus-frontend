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
                        <a href="">CADASTRAR USUÁRIO</a>
                    </li>
                    <li>
                        <a href="">LISTAR USUÁRIOS</a>
                    </li>
                </UlStyle>
        </HeaderStyle>
    )
}