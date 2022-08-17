import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/useForm";

const ApplicationFormPage = () => {
    const login = (event) => {
        event.preventDefault()
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo-floss-lamarr/trips/:id/apply", form)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.message))

        clear();
    }
    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", trip: "" })
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return (
        <div>
            <form onSubmit={login}>

                <h1>Inscreva-se para uma Viagem ao Espaço!</h1>
                <select name="trip" placeholder="Escolha a Viagem" >
                    <option value={"esc"}>Escolha a Viagem</option>
                    <option value={"viagemUm"}>Marte</option>
                </select>
                <input name="name" placeholder="Nome" value={form.name} onChange={onChange} required></input>
                <input name="age" placeholder="Idade" value={form.age} onChange={onChange} required></input>
                <input name="applicationText" placeholder="Teste de Candidatura" value={form.applicationText} onChange={onChange} required></input>
                <input name="profession" placeholder="Profissão" value={form.profession} onChange={onChange} required></input>
                <select name="country" placeholder="Escolha um País" value={form.country} onChange={onChange} required>
                    <option value={"esc"}>Escolha um País</option>
                    <option value={"bra"}>Brasil</option>
                </select>





                <button onClick={goToHome}>Home Page</button>
                <button type="submit">Enviar Inscrição!</button>
            </form>
        </div>

    )
}

export default ApplicationFormPage;