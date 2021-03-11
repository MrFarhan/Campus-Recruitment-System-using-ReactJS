import React from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const usePasswordToggler = () => {
    const [visible, setVisibility] = React.useState(false)

    const Icon = (
        visible ? <AiOutlineEye onClick={() => setVisibility(false)} /> : <AiOutlineEyeInvisible onClick={() => setVisibility(true)} />

    )

    const inputType = visible ? "text" : "password"

    return [Icon, inputType]
}

export default usePasswordToggler;