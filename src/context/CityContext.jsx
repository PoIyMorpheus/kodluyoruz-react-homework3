import { createContext,useState, useContext } from "react";

const CityContext = createContext()

const CityProvider = ( {children} )=>{
    const [city,setCity] = useState("İstanbul")

    const values = {
        city,
        setCity,
    }
    return (
        <CityContext.Provider value={values}>{children}</CityContext.Provider>
    )
}

const useCity = ()=>useContext(CityContext)

export {useCity,CityProvider}