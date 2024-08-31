import { createContext, useState, useEffect, useCallback } from "react";
import { api } from "../lib/api";

export const UserContext = createContext();
export const ManageUsersContext = createContext()

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageProjects, setErrorMessageProjects] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }

    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setData({});
  };

  const fetchUsers = useCallback(() => {
    setLoadingUsers(true)
    api.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error.response?.data || error.message);
        setErrorMessage(`Error fetching users: ${error.response?.data || error.message}`)
      })
      .finally(() => {
        setLoadingUsers(false)
      })
  }, []);

  const fetchProjects = useCallback(() => {
    api.get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        setErrorMessageProjects(
          `Error fetching projects: ${error.response?.data || error.message}`
        );
        // notify(error.response?.data || error.message, "error");
      });
  }, []);

  return (
    <UserContext.Provider
      value={{ user: data.user, setData, handleLogout, isLoading }}
    >
      <ManageUsersContext.Provider value={{ users, loadingUsers, errorMessage, fetchUsers, projects, fetchProjects, errorMessageProjects }}>
        {children}
      </ManageUsersContext.Provider>
    </UserContext.Provider>
  );
};
