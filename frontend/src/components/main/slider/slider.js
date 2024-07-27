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
        if (clientWidth < 900) {
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
                slidesPerView: 1,
                watchOverflow: true,
                spaceBetween: 15,
              });
              document.getElementById('next').addEventListener('click', () => {swiper.slideNext()})
              document.getElementById('prev').addEventListener('click', () => {swiper.slidePrev()})
        } else {
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
                slidesPerView: 3,
                watchOverflow: true,
                spaceBetween: 15,
              });
            document.getElementById('next').addEventListener('click', () => {swiper.slideNext()})
            document.getElementById('prev').addEventListener('click', () => {swiper.slidePrev()})
        }

    }
    useEffect(() => {
        if (firstRender) {
            componentDidMount()
        }
        return () => {firstRender = false }
    }, [])

    return (
      <div className='cont'>
        <div className="swiper-button-prev" id='prev'></div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide" id='one'>Slide 1</div>
              <div className="swiper-slide" id='two'>Slide 2</div>
              <div className="swiper-slide" id='three'>Slide 3</div>
              <div className="swiper-slide" id='one'>Slide 1</div>
              <div className="swiper-slide" id='two'>Slide 2</div>
              <div className="swiper-slide" id='three'>Slide 3</div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          
          <div className="swiper-button-next" id='next'></div>
          <div className="swiper-scrollbar"></div>
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