import $api from '../http/index'
import {AxiosResponse}from 'axios'
import {BASE_URL} from '../global_const'

export default class UserService {
    static fetchUsers = () => {
        return $api.get( BASE_URL + '/users')
    }

}
