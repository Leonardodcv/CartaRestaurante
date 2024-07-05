import { TOKEN } from "../utils/constans";

export function setToken(token) {
    localStorage.setItem("TOKEN", token)
}