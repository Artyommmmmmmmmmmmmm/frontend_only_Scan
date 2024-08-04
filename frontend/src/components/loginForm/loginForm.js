import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../..'
import {observer} from 'mobx-react-lite'
import './Loginform.css'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [person , setPerson] = useState('')
    const {store} = useContext(Context);
    const [form, setForm] = useState(true)
    const [validForm, setValidForm] = useState(false)
    const [loginValid, setLoginValid] = useState(false)
    const clientWidth = document.documentElement.clientWidth
    // const reg1 = new RegExp('^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$')

    // const validateLogin = (input) => {
    //     console.log(reg1.test(input))
    // }
    useEffect(() => {
        if (login != '' && password != '' && !validForm) {
            setValidForm(true)
        } 
        if (login == '' && password == '' && validForm) {
            setValidForm(false)
        }
    })


    return (
        <div className='login-form-container'>
            <div className='big-text-container'>
                Для оформления подписки на тариф, необходимо авторизоваться.
                {clientWidth < 900 ? null :
                <img src={require('./Characters.png')} className='image'></img>
                }
            </div>
            <div className='input-container-outer'>
                <img src={require('./Group_1171274237.png')} className='input-image'></img>
                <div className='input-container-inner'>
                    <div className='switch'>
                        <div className={form ? 'sign-in-toggle active-text' : 'sign-in-toggle'} onClick={() => setForm(true)}>
                            Войти
                            <div className={form ? 'sign-in-underline active-underline' : 'sign-in-underline'}></div>
                        </div>
                        <div className={form ? 'sign-up-toggle' : 'sign-up-toggle active-text'} onClick={() => setForm(false)}>
                            Зарегистрироваться
                            <div className={form ? 'sign-up-underline' : 'sign-up-underline active-underline'}></div>
                        </div>
                    </div>
                    <div className='login-password-container '>
                        <div className='login-container'>
                            Логин или номер телефона:
                            <input className='input'
                                type="text" 
                                value={login}
                                placeholder=''
                                onChange={(e) => {
                                    setLogin(e.target.value)
                                    // validateLogin(e.target.value)
                                }}
                            />
                        </div>
                        <div className='password-container'>
                            Пароль:
                            <input className='input' 
                                type="text" 
                                value={password}
                                placeholder=''
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>
                    </div>
                    <button onClick={validForm ? () => {store.login(login, password)} : null}
                            className={validForm ? 'insert-btn' : 'insert-btn-inactive'}>
                        Войти
                    </button>
                    <a className='password-recovery-btn'>Восстановить пароль</a>
                    <div className='other-links-container'>
                        Войти через:
                        <div className='other-links'>
                            <div className='other-link'>
                                <img src={require('./logos/googlelogo_color_272x92dp.png')} className='logo'></img>
                            </div> 
                            <div className='other-link'>
                                <img src={require('./logos/facebook-logo-pictures-e10wjdjmwrffqn9p.jpg')} className='logo'></img>
                            </div>
                            <div className='other-link'>
                                <img src={require('./logos/y.png')} className='logo'></img>
                            </div>
                        </div>
                    </div>



                    {/* <button onClick={() => {
                        localStorage.setItem('token', null);
                        localStorage.setItem('isAuth', '');
                    }}>
                        Выход
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
                    <button onClick={() => {store.history()}}>история</button> */}
                </div>
            </div>
            {clientWidth < 900 ?
            <div className='footer-img-container'>
                <img src={require('./Characters.png')} className='image'></img>
            </div>
                : null }
        </div>


    );
}
export default observer(LoginForm);