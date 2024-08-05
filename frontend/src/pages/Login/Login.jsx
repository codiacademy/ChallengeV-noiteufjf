
import './login.css'
import { ArrowRight } from 'lucide-react';


export default function Login() {
    return (
        <div className="loginPage-content">
            <div className="labelLogin">
                <div className="leftpage">
                    <img src="https://pngimg.com/d/letter_m_PNG113.png" alt="" />
                </div>
                <span></span>
                <div className="rightPage">
                    <form className="login" action="/rotadoback" method="POST">
                        <h2>Logue com a sua conta</h2>
                        <p>Nome de usuario ou E-mail *</p>
                        <input type="text" placeholder='E-mail ou Usuario' required/>
                        <p>Senha *</p>
                        <input type="password" placeholder='Senha' required/>
                        <div>
                            <input type="checkbox" id='check' />
                            <label htmlFor="">
                                Lembrar senha
                            </label>
                        </div>
                        <button id='buttonLogin'>
                            Entrar
                            <ArrowRight size={20}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
)
}