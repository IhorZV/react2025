import React, {createContext} from 'react';


const Context = createContext(null);

const ContextProvider = ({children}) => {
    return (

        <div>
            <ContextProvider value={"wfqwf"}>
                {children}
            </ContextProvider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};