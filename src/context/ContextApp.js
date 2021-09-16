import React, { createContext, useState } from 'react'
export const ContextApp = createContext();

const ContextAppProvider = (props) =>{
    const [pending, setPending] = useState([]);

    return (
        <ContextApp.Provider 
            value={{
                pending, 
                setPending,
                }}>
            {props.children}
        </ContextApp.Provider>
    )
}

export default ContextAppProvider;