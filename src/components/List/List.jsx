export const List = ({ list }) => {
    
    return (
            <ul>
                {list.map((item, index) => { 
                    return( 
                        <li key={index}>
                            { item.titulo }
                        </li>
                    )}
                )}
            </ul>
    )
}