import React, {useState} from 'react'
import './main.css'

class Main extends React.Component {

  render() {
    return (
      <div className='main-page-container'>
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
  )};
}

export default Main;