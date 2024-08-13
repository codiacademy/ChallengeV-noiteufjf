import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token)
            setUser({ token, email: decodedToken.email, name: decodedToken.name, isAdmin: decodedToken.isAdmin });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
