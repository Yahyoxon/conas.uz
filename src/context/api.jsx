import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

const ApiProvider = ({children}) => {
    const [state,setState] = useState("")
    const isTester = false
    
    useEffect(()=>{
        const server = {
            server_dev: "http://localhost:5000",
            server_dep: "https://asiacons.herokuapp.com",
            server_dep1: "https://api.conas.uz",
        }

        if (isTester) {
            setState(server.server_dev)
        } else {
            setState(server.server_dep1)
        }
    },[isTester])

    const value = {
        state,
        setState
    }
    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useApi = () => {
    const { state, setState } = useContext(Context)
    return [state, setState]
}

export {
    ApiProvider,
    useApi
}
