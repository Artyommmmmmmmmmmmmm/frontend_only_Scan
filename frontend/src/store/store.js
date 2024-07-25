import {makeAutoObservable} from 'mobx'
import AuthService from '../service/AuthService'

export default class Store {
    user = {}
    isAuth = false

    constructor() {
        makeAutoObservable(this)
        console.log(this.user)
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
            this.setAuth(true);
            this.setUser(JSON.parse(response.config.data));
        } catch(e) {
            console.log(e)
        }
    }
    async info() {
        try {
            const response = await AuthService.info();
            localStorage.setItem('userInfo', response.data);
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
    async histograms(startDate, endDate, inn, limit,
                     maxFullness, inBusinessNews, onlyMainRole,
                     tonality, onlyWithRiskFactors, excludeTechNews,
                     excludeAnnouncements, excludeDigests) {
        try {
            const response = await AuthService.histograms(
                startDate, endDate, inn, limit,
                maxFullness, inBusinessNews, onlyMainRole,
                tonality, onlyWithRiskFactors, excludeTechNews,
                excludeAnnouncements, excludeDigests);
                console.log(response)

        } catch(e) {
            console.log(e)
        }
    }
}