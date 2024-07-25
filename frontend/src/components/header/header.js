import React, {useState} from 'react'
import UserInfo from './userInfo/userInfo.js'
import './header.css'

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      isActive : true,
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
    console.log(this.state.isActive)};

  render() {
    return (
      <div className="main-cont">
          <img src={require('./header_logo.png')}/>
          <div className='main-header-cont'>
              
              <div className="nav-cont">
                  <nav className={this.state.isActive ? 'nav-bar' : 'nav-bar-extra'}>
                  <a>Главная</a>
                  <a>Тарифы</a>
                  <a>FAQ</a>
                  </nav>
              </div>
              <UserInfo/>
              <div className={this.state.isActive ? 'user-sign' : 'user-sign-extra'}>
                  <a>регистрация</a> {this.state.isActive ? '|' : ''} 
                  
                  <div className='sign-in-btn'>
                    <a>Войти</a>
                  </div>
              </div>

          </div>
          <div className="burger-cont" onClick={() => {this.handleClick()}}>
              <span className="burger"></span>
              <span className="burger"></span>
              <span className="burger"></span>
          </div>
      </div>
  )};
}

export default Header;
