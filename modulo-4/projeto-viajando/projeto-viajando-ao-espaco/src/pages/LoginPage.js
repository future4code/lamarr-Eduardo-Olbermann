import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import useProtected from "../Hooks/useProtected";


const LoginPage = () => {

    useProtected()

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const navigate = useNavigate()

    const goToPageHome = () => {
        navigate("/")
    }
    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo/login",
            form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => console.log(error.message))
        clear();
    }
    return (
        <>
            <h1>Login</h1>

            <button onClick={goToPageHome}>Home Page</button>

            <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail</label>
                <input
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                />
                <label htmlFor="senha">Senha</label>
                <input
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    required
                />


                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export default LoginPage;