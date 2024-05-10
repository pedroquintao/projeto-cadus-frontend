export const List = ({ list }) => {
    
    return (
            <ul>
                {list.map(item => { 
                    return( 
                        <li>
                            { item.name }
                        </li>
                    )}
                )}
            </ul>
    )
}