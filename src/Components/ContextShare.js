import React, { createContext, useState } from 'react'


// context creation
export const registerContext = createContext()

function ContextShare({ children }) {
    //state for registerContext
    const [registerUpdate, setRegisterUpdate] = useState("")

    return (
        <div>
            <registerContext.Provider value={{ registerUpdate, setRegisterUpdate }}>
                {children}
            </registerContext.Provider>
        </div>
    )
}

export default ContextShare
