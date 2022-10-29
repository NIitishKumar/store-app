import axios from 'axios'

let url = {
    dev:"https://immencenode.herokuapp.com/",
    local:"https://immencenode.herokuapp.com/",
}

const instance = axios.create({
    baseURL:url.local,
})

export default instance;