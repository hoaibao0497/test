import axios from "axios";

// Authentication Service

const API_URL = "http://localhost:5000/api"

const register = (username, email, password) => {
    return axios.post(`${API_URL}/auth/signup`, {username, email, password})
}
const login = (email, password) => {
    return axios.post(`${API_URL}/auth/signin`, {email, password})
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
}
const logout = () => {
    localStorage.removeItem("user")
    localStorage.clear()
    window.location.href = "/login"
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}
const confirmEmail = (user) => {
    return axios.post(`${API_URL}/auth/confirmEmail`, user)
}
const verifiedEmail = (user) => {
    return axios.post(`${API_URL}/auth/verifyEmail`, user).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    })
}
const authServices = {
    register, login, logout, getCurrentUser, confirmEmail, verifiedEmail
}

export default authServices