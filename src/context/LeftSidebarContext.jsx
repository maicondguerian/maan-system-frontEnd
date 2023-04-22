import { createContext, useContext, useState } from 'react'


export const LeftSidebarContext = createContext({});

export const LeftSidebarProvider = ( {children} ) => {
    const [menus, setMenus] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <LeftSidebarContext.Provider 
        value={{
            menus,
            setMenus,
            isOpen,
            toggle
        }}
        >
            {children}
        </LeftSidebarContext.Provider>
    );
};

export const useLeftSidebarContext = () => {
    const { menus, setMenus, isOpen, toggle } = useContext(LeftSidebarContext);

    return { menus, setMenus, isOpen, toggle };
};
