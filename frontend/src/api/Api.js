import axios from "axios"


const BASE_URL = "http://localhost:4000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQzODQ1MGYwYjgzNTc0ZDkzNjc4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTE0Mzk5NiwiZXhwIjoxNjgxNDAzMTk2fQ._Uj0o9YR48EXlFZTNkRMpasAEnvNAAJp4kN9n_S-8WU"


export const PublicRequest =  axios.create({
    baseURL : BASE_URL
})


export const UserRequest =  axios.create({
    baseURL : BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})