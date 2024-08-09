import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ token });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
