
import { useContext, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { UserContext } from '../../context/AppProvider';
import axios from 'axios'

import './login.css'


export default function Login() {
    const setUser = useContext(UserContext)
    const [data, setData] = useState({ email: '', password: '', })
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

        axios.post('http://localhost:8080/login', { email: data.email, password: data.password })
            .then(response => {
                const { token } = response.data;

                localStorage.setItem('token', token);

                setUser({ email: data.email, token });

                setMessage('Login bem-sucedido!');
            })
            .catch(error => {
                setMessage('Erro no login: ' + error.response.data.error);
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
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    )
}