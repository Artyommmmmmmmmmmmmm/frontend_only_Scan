import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../..'
import {observer} from 'mobx-react-lite'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'



const Slider = () => {

    let firstRender = true

    const clientWidth = document.documentElement.clientWidth

    const componentDidMount = () => {
        // if (clientWidth < 900) {
        //     const swiper = new Swiper('.swiper', {
        //         // Optional parameters
        //         direction: 'horizontal',
        //         loop: true,
              
        //         // If we need pagination
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true,
        //           },
        //         // Navigation arrows
        //         navigation: {
        //           nextEl: '#next',
        //           prevEl: '#prev',
        //         },
              
        //         // And if we need scrollbar
        //         scrollbar: {
        //           el: '.swiper-scrollbar',
        //         },
        //         observer: true,
        //         observeParents: true,
        //         parallax:true,
        //         preventClicksPropagation: false,
        //         preventClicks: false,
        //         slidesPerView: 1,
        //         watchOverflow: true,
        //         spaceBetween: 15,
        //       });
        //       document.getElementById('next').addEventListener('click', () => {swiper.slideNext()})
        //       document.getElementById('prev').addEventListener('click', () => {swiper.slidePrev()})
        // } else {
            const swiper = new Swiper('.swiper', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
              
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
                slidesPerView: clientWidth < 900 ? 1 : 3,
                watchOverflow: true,
                spaceBetween: 15,
              });
            document.getElementById('next').addEventListener('click', () => {swiper.slideNext()})
            document.getElementById('prev').addEventListener('click', () => {swiper.slidePrev()})

    }
    useEffect(() => {
        if (firstRender) {
            componentDidMount()
        }
        return () => {firstRender = false }
    }, [])

    return (
      <div className='cont cont2'>
        <div className="swiper-button-prev swiper-button-prev2" id='prev'></div>
          <div className="swiper swiper2">
            <div className="swiper-wrapper swiper-wrapper2">
              <div className="swiper-slide swiper-slide2" >
                <div className='slide-image-container slide-image-container2'>
                  <img src={require('./images/Mask_group_1.png')} className='slide-image slide-image2'></img>
                </div>
                <div className='slide-text-container slide-text-container2'>
                  <div id='one' className='slide-text slide-text2'>Высокая и оперативная скорость обработки заявки</div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide2" >
                <div className='slide-image-container slide-image-container2'>
                  <img src={require('./images/Mask_group_2.png')} className='slide-image slide-image2'></img>
                </div>
                <div className='slide-text-container slide-text-container2'>
                  <div id='two' className='slide-text slide-text2'>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide2" >
                <div className='slide-image-container slide-image-container2'>
                  <img src={require('./images/Mask_group_3.png')} className='slide-image slide-image2'></img>
                </div>
                <div className='slide-text-container slide-text-container2'>
                  <div id='three' className='slide-text slide-text2'>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide2" id='one'>Slide 1</div>
              <div className="swiper-slide swiper-slide2" id='two'>Slide 2</div>
              <div className="swiper-slide swiper-slide2" id='three'>Slide 3</div>
            </div>
          </div>
          <div className="swiper-button-next swiper-button-next2" id='next'></div>
      </div>
    );
}

export default Slider;

// store.histograms(
//                 startDate, endDate, inn, limit,
//                 maxFullness, inBusinessNews, onlyMainRole,
//                 tonality, onlyWithRiskFactors, excludeTechNews,
//                 excludeAnnouncements, excludeDigests                                       
//             )