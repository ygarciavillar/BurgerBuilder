import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-1687a-default-rtdb.firebaseio.com/'
})

export default instance