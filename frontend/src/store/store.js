import {makeAutoObservable} from 'mobx'
import AuthService from '../service/AuthService'

export default class Store {
    user = {}
    isAuth = false

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
            localStorage.setItem('histograms', JSON.stringify(response))
        } catch(e) {
            console.log(e)
        }
    }

    async documentIds(startDate, endDate, inn, limit,
                    maxFullness, inBusinessNews, onlyMainRole,
                    tonality, onlyWithRiskFactors, excludeTechNews,
                    excludeAnnouncements, excludeDigests) {
        try {
            const response = await AuthService.documentIds(
            startDate, endDate, inn, limit,
            maxFullness, inBusinessNews, onlyMainRole,
            tonality, onlyWithRiskFactors, excludeTechNews,
            excludeAnnouncements, excludeDigests);
            localStorage.setItem('ids', JSON.stringify(response))
        } catch(e) {
            console.log(e)
        }
    }

    async documents(array) {
        try {
            const response = await AuthService.documents(array)
            localStorage.setItem('documents', JSON.stringify(response))
            return(response)
        } catch(e) {
            console.log(e)
        }

    }
}