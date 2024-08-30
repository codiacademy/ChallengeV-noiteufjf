import { useState, useContext } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { UserContext } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import LogoMagicRoxa from "../../img/LogoMagic2.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./login.css";

export default function Login() {
  const { setData } = useContext(UserContext);
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        autoClose: 3000,
      });
    } else if (type === "error") {
      toast.error(message);
    }
  };

  const handleInputCahange = (e) => {
    const { name, value } = e.target;

    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    api
      .post("/sessions", {
        email: inputData.email,
        password: inputData.password,
      })
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setData({ token, user });

        notify("Login efetuado com sucesso!", "success");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        const errorMessage = error.response.data.error;
        notify(errorMessage, "error");
      })

      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      });
  };

  return (
    <div className="loginPage-content">
      <div className="labelLogin">
        <div className="leftpage">
          <img src={LogoMagicRoxa} alt="" />
        </div>
        <span></span>
        <div className="rightPage">
          <form className="login" onSubmit={handleLogin}>
            <h2>Logue com a sua conta</h2>
            <label>Nome de usuario ou E-mail *</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail ou Usuario"
              onChange={handleInputCahange}
              value={inputData.email}
              required
            />
            <p>Senha *</p>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleInputCahange}
              value={inputData.password}
              required
            />
            <div>
              <input type="checkbox" id="check" />
              <label htmlFor="">Lembrar senha</label>
            </div>
            <ToastContainer />
            <button id="buttonLogin" disabled={isLoading}>
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
  );
}
