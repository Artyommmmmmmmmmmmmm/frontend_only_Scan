import React, {useContext, useState} from 'react'
import { Context } from '../..'
import {observer} from 'mobx-react-lite'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [person , setPerson] = useState('')
    const {store} = useContext(Context);
    


    return (
        <div>
            <input 
                type="text" 
                value={login}
                placeholder='Login'
                onChange={(e) => {setLogin(e.target.value)}}
            />
            
            <input 
                type="text" 
                value={password}
                placeholder='Password'
                onChange={(e) => {setPassword(e.target.value)}}
            />

            <button onClick={() => {store.login(login, password)}}>
                Вход
            </button>
            <p></p>           
            <button onClick={() => {store.info()}}>
                Инфо
            </button>
            <p></p>
            <input
             type='text'
             value={person}
             placeholder='число'
             onChange={(e) => setPerson(e.target.value)}
            />
            <button onClick={() => {store.persons(person)}}>
                персона
            </button>
            <p></p>
            <button onClick={() => {store.history()}}>история</button>
        </div>


    );
}
export default observer(LoginForm);