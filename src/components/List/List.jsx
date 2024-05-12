export const List = ({ list }) => {

    return (
            <ul>
                {list[0] && list.map((item, index) => { 
                    return( 
                        <li key={index}>
                            { item.name }
                        </li>
                    )}
                )}
            </ul>
    )
}