import {makeAutoObservable} from 'mobx'
import AuthService from '../service/AuthService'
// import { useSelector, useDispatch } from 'react-redux'
// import { setResponseHistograms } from '../redux/counterSlice.js'

export default class Store {
    user = {}
    isAuth = false
    // dispatch = useDispatch()

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    async login(login, password) {
        try {
            const response = await AuthService.login(login, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('isAuth', true);

            this.setAuth(true);
            this.setUser(JSON.parse(response.config.data));
        } catch(e) {
            console.log(e)
        }
    }
    async info() {
        try {
            const response = await AuthService.info();
            return(response)
        } catch(e) {
            console.log(e)
        } 
    }
    async persons(num) {
        try {
            const response = await AuthService.persons(num);
            console.log(response)
        } catch(e) {
            console.log(e)
        }
    }
    async history() {
        try {
            const response = await AuthService.history();
            console.log(response)
        } catch(e) {
            console.log(e)
        }
    }
    async histograms(request) {
        try {
            const response = await AuthService.histograms(request);
            return response
            // this.dispatch(setResponseHistograms(response))
        } catch(e) {
            console.log(e)
        }
    }

    async documentIds(request) {
        try {
            const response = await AuthService.documentIds(request);
            return response
        } catch(e) {
            console.log(e)
        }
    }

    async documents(array) {
        try {
            const response = await AuthService.documents(array)
            return(response)
        } catch(e) {
            console.log(e)
        }

    }
}