import React, {useState} from 'react'
import './footer.css'

class Footer extends React.Component {
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
      <footer className="footer-main-cont">
        <div>
        <img className='scan-logo' src={require('./footer_logo.png')}/>
        </div>
        <div>
          <div className='footer-text'>
            <p>г. Москва, Цветной б-р, 40</p>
            <p>+7 495 771 21 11</p>
            <p>info@scan.ru</p>
          </div>
          <div className='copyright'>
            <p>Copyright. 2022</p>
          </div>
        </div>
      </footer>
  )};
}

export default Footer;
