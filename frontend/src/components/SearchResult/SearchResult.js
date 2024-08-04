import React, {useContext, useEffect, useState} from 'react'
import Pare from './Pare/Pare.js'
import Solo from './Solo/Solo.js'
import { Context } from '../..'
import Slider1 from './slider/slider1.js'
import './SearchResult.css'

const SearchResult = () => {
    const {store} = useContext(Context)
    const response = JSON.parse(localStorage.getItem('histograms'))
    const totalIds = JSON.parse(localStorage.getItem('ids')).data.items.map(item => item.encodedId)
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)
    const itemsPerPage = 10
    const clientWidth = document.documentElement.clientWidth
    const [visibleData, setVisibleData] = useState(null)
    const fetchData = async () => {
        try {
            const response = await store.documents(totalIds);
            const newData = response.data.slice(0, page * itemsPerPage)
            setVisibleData(newData);        
        } catch (e) {
            setError(e);
        }
    };

    

    // const loadMoreData = () => {
        
    //     setVisibleData(newData)
    // }

    useEffect(() => {
      fetchData()
    }, [page])
    return (
      <div className='searchres-main-cont'>
        <div className='searchres-top-part'>
          <div>
            <div className='searchres-big-text margin-top'>
              <p>ищем. скоро</p>
              <p>будут результаты</p>
            </div>
            <div className='searchres-small-text margin-top'>
              <p>Поиск может занять некоторое время,</p>
              <p>просим сохранять терпение.</p>
            </div>
          </div>
          <div>
            <img src={require('./Group_1171274267.png')} className='searchres-mobile-img'></img>
          </div>
        </div>
        <div>
          <p className='searchres-smaller-big-text'>общая сводка</p>
          <p className='variants-count-text'>{`Найдено ${response.data.data[0].data.length} вариантов`}</p>
          <div className='variants-cont'>
            <div className='variants-hints-cont'>
              <div  className='variants-hints'>
                <p>Период</p>
                <p>Всего</p>
                <p>Риски</p>
              </div>
            </div>
            <div className='searchres-slider-cont'>
              <Slider1/>
            </div>
          </div>
        </div>
        <div>
          <p className='searchres-smaller-big-text'>список документов</p>
          {visibleData ?
          <div className='cards-cont'>
            {clientWidth < 900 ?
            visibleData.map((item) => 
            <Solo
              item={item}
            />
            )
            :
             visibleData.map((item, index) => 
              index % 2 === 0 ?
              <Pare
                  key={index}
                  item1={item}
                  item2={visibleData[index+1]}
              />  : null          
              )}

          </div>
          :
          <div>
            <p>загрузка</p>
          </div>
          }
          <div className='show-more-btn-cont'>
            <button onClick={() => {setPage(page+1)}} className='show-more-btn'>Показать больше</button>
          </div>


        </div>
      </div>
    );
}

export default SearchResult;
