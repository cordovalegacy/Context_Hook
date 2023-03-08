import { useState } from "react"
const Sibling = (props) => {

    const { user, setUser } = props
    const [userName, setUserName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setUser([...user, userName])
        setUserName("")
    }

    return (
        <form onSubmit={submitHandler}>
            <label>State: </label>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
        </form>
    )

}

export default Sibling