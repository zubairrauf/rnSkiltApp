import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MySignsContext = React.createContext()

const MySignsContextProvider = ({ children }) => {
    const [ mySigns, setMySigns ] = useState([])
    //Get the signs from AsyncStorage on load
    useEffect(() => {
        getSigns()
    }, [])
    
    const getSigns = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('kivMySigns')
            const parsedValue = jsonValue !== null ? JSON.parse(jsonValue) : null
            if(parsedValue !== null ) {
                setMySigns(parsedValue) //This creates error when parsedValue is null
            }
            else {
                console.log('parsedvalue null', parsedValue)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <MySignsContext.Provider value={{ mySigns, setMySigns }}>
            {children}
        </MySignsContext.Provider>
    )
}

export {MySignsContext , MySignsContextProvider}