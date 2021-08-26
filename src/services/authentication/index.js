import Axios from '../index'

const registerUser = async (payload) => {
    try {
        const resp = await Axios.post('/register', payload)
        console.log(resp)
    } catch (error) {
        throw error.response.data
    }
}

const userLogin = async (payLoad, user_login) => {
    try {
        const resp = await Axios.post('/login', payLoad)

        user_login(resp.data.message, true)
        return resp
    } catch (error) {
        throw error
    }
}

const resetPin = async (pin) => {
    const body = { pin }
    try {
        const resp = await Axios.post('/pinreset', body)
        console.log(resp)
    } catch (error) {
        throw error
    }
}

const signOut = (userLogin) => {
    try {
        userLogin('', false)
        localStorage.clear()
    } catch (error) {
        throw error
    }
}
export { userLogin, resetPin, registerUser, signOut }
