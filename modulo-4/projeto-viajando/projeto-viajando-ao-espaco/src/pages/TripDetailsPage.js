import axios from "axios";
import { useEffect } from "react"
import useProtectedPage from "../hooks/useProtectedPage";

export function MyTrips() {
    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eduardo/trip/NoIFVcOiSgTKTIPVZwXS",
            {
                headers: {
                    auth: token
                }
            }).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log("Deu erro: ", error.response)
            })
    }, [])

    return (
        <>
            <h1>Detalhes da viagem!</h1>
        </>
    )
}