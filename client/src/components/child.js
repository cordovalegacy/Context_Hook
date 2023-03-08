import { useContext } from "react";
import { MyContext } from "../App";

const Child = (props) => {
    const context = useContext(MyContext)
    return (
            <div>
                {context}
            </div>
    )
}

export default Child;