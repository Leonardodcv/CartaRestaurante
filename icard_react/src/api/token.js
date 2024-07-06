import { TOKEN } from "../utils/constans";

export function setToken(token) {
    localStorage.setItem("TOKEN", token)
}

export function getToken(){
    return localStorage.getItem(TOKEN)
}

export function removeToken(){
    console.log("TOKEN antes de borrar:",TOKEN);
    localStorage.removeItem(TOKEN)
    console.log("TOKEN despues de borrar:",TOKEN);
}