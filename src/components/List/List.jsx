export const UserList = ({ title, list }) => {
    
    return (
        <>
            <h1>{ title }</h1>
            <ul>
                {list.map(item => {
                    <li>
                        { item.name }
                    </li>
                })}
            </ul>
        </>
    )
}