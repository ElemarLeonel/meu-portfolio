import api from '../../api/api'

export default async function sendEmail(fields) {

    await api.post("/send/email", fields, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return error.message
        })
}