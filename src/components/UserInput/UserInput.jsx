import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const UserInput = ({ label }) => {

    const { userName, setUserName } = useContext(UserContext)

    return (
        <>
            <label>{ label }</label>
            <input onChange={(e) => setUserName(e.target.value)} value={userName}/>
        </>
    )
}
