import React, {useContext, useEffect, useState} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setResponseHistograms } from '../../redux/counterSlice.js'
import Pare from './Pare/Pare.js'
import Solo from './Solo/Solo.js'
import { Context } from '../..'
import Slider1 from './slider/slider1.js'
import './SearchResult.css'

const SearchResult = () => {
    const {store} = useContext(Context)
    const [response, setResponse] = useState(null) 
    const [totalIds, setTotalIds] = useState(null) 
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1)
    const itemsPerPage = 10
    const clientWidth = document.documentElement.clientWidth
    const [totalData, setTotalData] = useState(null)
    const request = JSON.parse(localStorage.getItem('requestData'))

  const fetchData = async () => {
    try {
        const histograms = await store.histograms(request);
        setResponse(histograms);  

        const ids = await store.documentIds(request);
        const array = await ids.data.items.map((item) => item.encodedId)
        setTotalIds(array)

        const response = await store.documents(array);
        setTotalData(response); 
        console.log(response)
        const visibleData = response.data.slice(0, page * itemsPerPage)
    } catch (e) {
        setError(e);
        console.log(e)
    }
};
  
  const showMore = () => {
    setPage(page+1)
  }

  const changePage = () => {
      return  totalData.data.slice(0, page * itemsPerPage)
    };
    const check = () => {
      console.log('респонс')
      console.log(response)
      console.log('айди')
      console.log(totalIds)
      console.log('дата')
      console.log(totalData)
    };
// const newData = response.data.slice(0, page * itemsPerPage)
    useEffect(() => {
      fetchData()
    }, [])  

    let visibleData = null
    if (totalData) {
      visibleData = changePage()
    }

    return (
      <div className='searchres-main-cont'>
        <div className='searchres-top-part'>
          <div>
            <div className='searchres-big-text margin-top' onClick={() => {check()}}>
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
          <p className='variants-count-text'>{`Найдено ${0} вариантов`}</p>
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
            <button onClick={() => {showMore()}} className='show-more-btn'>Показать больше</button>
          </div>


        </div>
      </div>
    );
}

export default SearchResult;
