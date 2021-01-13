import React, { useState } from 'react'

const MySignsContext = React.createContext()

const MySignsContextProvider = ({ children }) => {
    const [ mySigns, setMySigns ] = useState([])
    
    return (
        <MySignsContext.Provider value={{ mySigns, setMySigns }}>
            {children}
        </MySignsContext.Provider>
    )
}

export {MySignsContext , MySignsContextProvider}