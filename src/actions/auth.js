import axios from "axios"

export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user)

export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user)

//update the user in local storage
export const updateUserInLocalStorage = (user, neext) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth"))
    auth.user = user
    localStorage.setItem("auth", JSON.stringify(auth))
    neext()
  }
}
