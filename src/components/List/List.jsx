import styled from "styled-components"

    const UlStyle = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        gap: 20px;
        margin: 0;
        padding: 0;
        width: 100%;
        max-height: 30vh;
        overflow-y: auto;
    `

    const LiStyle = styled.li`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        min-height: 3em;
        list-style: none;
        padding: 0.5em 1em;
        margin: 0;
        border: 1px solid ${props => props.theme.colors.lightGray};
        border-radius: 16px;
        transition: border-color 0.4s ease-in;
        transition: color 0.2s ease-in;
        font-size: ${props => props.theme.spacing.xm};
        overflow: hidden;
        text-overflow: ellipsis;
    `

export const List = ({ list, style }) => {

    return (
            <UlStyle style={style} >
                {list[0] && list.map((item, index) => { 
                    return( 
                        <LiStyle key={index}>
                            { item.name }
                        </LiStyle>
                    )}
                )}
            </UlStyle>
    )
}