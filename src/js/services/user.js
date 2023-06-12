import { baseUrl } from "src/js/variables.js"

async function user(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { user }