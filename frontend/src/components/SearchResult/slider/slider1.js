import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../..'
import {observer} from 'mobx-react-lite'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider1.css'



const Slider1 = (responseData) => {

    const clientWidth = document.documentElement.clientWidth
    const docs = []
    const response = responseData.responseData
    for (let i = 0 ; i < response.data.data[0].data.length ; i++) {
      docs.push(
        {
          id: i,
          date: 
            `${response.data.data[0].data[i].date.slice(8, 10)}.` +
            `${response.data.data[0].data[i].date.slice(5, 7)}.` +
            `${response.data.data[0].data[i].date.slice(0, 4)}`
           ,
          total: response.data.data[0].data[i].value,
          risks: response.data.data[1].data[i].value
        }
      )
    }

    const createSwiper = () => {
            const swiper = new Swiper('.swiper1', {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
              
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                // Navigation arrows
                navigation: {
                  nextEl: '#next',
                  prevEl: '#prev',
                },
              
                // And if we need scrollbar
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
                observer: true,
                observeParents: true,
                parallax:true,
                preventClicksPropagation: false,
                preventClicks: false,
                slidesPerView: clientWidth < 900 ? 1 : 8,
                watchOverflow: true,
                spaceBetween: 15,
              });
            document.getElementById('next').addEventListener('click', () => {swiper.slideNext()})
            document.getElementById('prev').addEventListener('click', () => {swiper.slidePrev()})
            const slides = document.querySelectorAll('.swiper-slide')

    }
    useEffect(() => {
        createSwiper()
    }, [])



    return (
      <div className='cont cont1'>
        <div className="swiper-button-prev swiper-button-prev1" id='prev'></div>
          <div className="swiper1">
            <div className="swiper-wrapper swiper-wrapper1">
              {docs.map(item =>
                <div key={item.id} className='swiper-slide swiper-slide1'>
                  <p>{item.date}</p>
                  <p>{item.total}</p>
                  <p>{item.risks}</p>
                </div>
              )}
            </div>
          </div>
          <div className="swiper-button-next swiper-button-next1" id='next'></div>
      </div>
    );
}

export default Slider1;

// store.histograms(
//                 startDate, endDate, inn, limit,
//                 maxFullness, inBusinessNews, onlyMainRole,
//                 tonality, onlyWithRiskFactors, excludeTechNews,
//                 excludeAnnouncements, excludeDigests                                       
//             )