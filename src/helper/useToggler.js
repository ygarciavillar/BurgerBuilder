import { useState } from 'react'

const useToggler = (initial = false) => {
    const [on, setOn] = useState(initial)

    const toggle = () => {
        setOn(!on)
    }

    return [on, toggle]
}

export default useToggler
