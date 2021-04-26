// Import Component
import Signup from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"
import Profile from "../pages/Profile/Profile"

// buat return {label,path,component} yang bakal di ambil di App.js
const route = (label, path, component) => ({
    label,
    path,
    component
})

// Bikin route
export const LOGIN_PAGE = route("Login","/login",Login)
export const SIGNUP_PAGE = route("Signup","/signup",Signup)
export const PROFILE_PAGE = route("Profile","/profile",Profile)


// yang gak bisa diakses tanpa authentication
export const AllPrivateRoutes = [
    PROFILE_PAGE
]

// yang bisa diakses tanpa authentication
export const AllOpenRoutes = [
    LOGIN_PAGE,
    SIGNUP_PAGE
]