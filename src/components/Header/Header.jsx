import { styled } from "styled-components"

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100vw;
    color: black;
`

export const Header = () => {

    return (
        <HeaderStyle>
            {/* <nav> */}
                <ul>
                    <li>
                        <a href="">CADASTRO</a>
                    </li>
                    <li>
                        <a href="">USUÁRIOS CADASTRADOS</a>
                    </li>
                </ul>
            {/* </nav> */}
        </HeaderStyle>
    )
}