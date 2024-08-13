import { createContext, useState, useEffect } from 'react';
import { api } from '../lib/api';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        
        if (token && user) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            setUser({ token, user: JSON.parse(user) });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
