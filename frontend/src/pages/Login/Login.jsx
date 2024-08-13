import { useState, useContext } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { UserContext } from '../../context/AppProvider';
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/api';

import './login.css'


export default function Login() {
    const { setUser } = useContext(UserContext)
    const [data, setData] = useState({ email: '', password: '', })
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleInputCahange = (e) => {
        const { name, value } = e.target

        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true)

        api.post('/sessions', { email: data.email, password: data.password })
            .then(response => {
                const { token, user } = response.data;

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user))

                api.defaults.headers.common.Authorization = `Bearer ${token}`
                setUser({ token, user });

                navigate('/')
            })
            .catch(error => {
                setMessage(error.response.data.error);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div className="loginPage-content">
            <div className="labelLogin">
                <div className="leftpage">
                    <img src="https://pngimg.com/d/letter_m_PNG113.png" alt="" />
                </div>
                <span></span>
                <div className="rightPage">
                    <form className="login" onSubmit={handleLogin}>
                        <h2>Logue com a sua conta</h2>
                        <label>Nome de usuario ou E-mail *</label>
                        <input
                            type="text"
                            name="email"
                            placeholder='E-mail ou Usuario'
                            onChange={handleInputCahange}
                            value={data.email}
                            required
                        />
                        <p>Senha *</p>
                        <input
                            type="password"
                            name="password"
                            placeholder='Senha'
                            onChange={handleInputCahange}
                            value={data.password}
                            required
                        />
                        <div>
                            <input type="checkbox" id='check' />
                            <label htmlFor="">
                                Lembrar senha
                            </label>
                        </div>
                        {message && <p id='error-message'>{message}</p>}
                        <button id='buttonLogin' disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="spin" size={20} />
                            ) : (
                                <>
                                    Entrar
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}