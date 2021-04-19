// Import Component
import Signup from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"

// buat return {label,path,component} yang bakal di ambil di App.js
const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route
export const LOGIN_PAGE = route("Login","/login",Login)
export const SIGNUP_PAGE = route("Signup","/signup",Signup)

// yang gak bisa diakses tanpa authentication
export const AllPrivateRoutes = [

]

// yang bisa diakses tanpa authentication
export const AllOpenRoutes = [
    LOGIN_PAGE,
    SIGNUP_PAGE
]