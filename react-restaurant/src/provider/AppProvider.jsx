import React, {createContext, useState} from 'react';

export const AppContext = createContext({
    route: "",
});

const AppProvider = ({ children }) => {
    const [route, setRoute] = useState("detail");

    return <AppContext.Provider value={{route}}>{children}</AppContext.Provider>
};

export default AppProvider;