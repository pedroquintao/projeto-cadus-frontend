export const Input = ({ label, onChange, value }) => {

    return (
        <>
            <label>{ label }</label>
            <input onChange={onChange} value={value}/>
        </>
    )
}
