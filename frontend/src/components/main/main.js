import React, {useState} from 'react'
import Slider from './slider/slider.js'
import './main.css'

class Main extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
        <div className='main-page-top'>
          <div className='request-container'>
            <div className='big-text'>
              <p>сервис по поиску публикаций о компании по его ИНН</p>
            </div>
            <div className='small-text'>
              <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            </div>
            <div className='request-btn-container'>
              <div className='request-btn'>
                <div>Запросить данные</div>
              </div>

            </div>
          </div>
              <div className='img-container'> 
                  <img src={require('./Group_13.png')}/>
              </div>

        </div>
        <div className='main-page-slider'>
          <div className='big-text'>
            Почему именно мы
          </div>
          <Slider/>
          <div className='scnd-image'>
            <img  src={require('./Group_14.png')}></img>
          </div>
        </div>
        <div className='tariffs-cont'>
          <p className='big-text'>наши тарифы</p>
          <div className='tariffs'>
            <div className='tariff'>
             <div className='tariff-header'>

              </div>
              <div className='tariff-inner'>

              </div>
            </div>
            <div className='tariff'>
              <div className='tariff-header'>

              </div>
              <div className='tariff-inner'>

              </div>
            </div>
            <div className='tariff'>
              <div className='tariff-header'>

              </div>
              <div className='tariff-inner'>

              </div>
            </div>
          </div>
        </div>
      </div>
  )};
}

export default Main;