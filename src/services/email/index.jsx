import api from '../../api/api'
import { toast } from "react-toastify";

export default async function sendEmail(fields) {

    await api.post("/send/email", fields, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://elemarleonel.com.br'
        }
    })
        .then((response) => {
            toast("Mensagem enviada com sucesso", {
                type: 'success',
            })
            return response.data
        })
        .catch((error) => {
            toast("Erro ao enviar a mensagem", {
                type: 'error',
            })
            return error.message
        })
}