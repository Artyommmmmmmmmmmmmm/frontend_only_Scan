import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../..'
import {observer} from 'mobx-react-lite'
import './Histograms.css'

const HistogramsForm = () => {
    const {store} = useContext(Context);
    const [inn, setInn] = useState('')
    const [tonality, setTonality] = useState('')
    const [limit, setLimit] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [maxFullness, setMaxFullness] = useState(false)
    const [inBusinessNews, setInBusinessNews] = useState(false)
    const [onlyMainRole, setOnlyMainRole] = useState(false)
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false)
    const [excludeTechNews, setExcludeTechNews] = useState(false)
    const [excludeAnnouncements, setExcludeAnnouncements] = useState(false)
    const [excludeDigests, setExcludeDigests] = useState(false)
 
    const innValidation = () => {
        const n1 = inn[0] * 2
        const n2 = inn[1] * 4
        const n3 = inn[2] * 10
        const n4 = inn[3] * 3
        const n5 = inn[4] * 5
        const n6 = inn[5] * 9
        const n7 = inn[6] * 4
        const n8 = inn[7] * 6
        const n9 = inn[8] * 8
        let control = n1+n2+n3+
                      n4+n5+n6+
                      n7+n8+n9
        control = control%11
        if (control == inn[9]) {
            document.getElementById('error').innerHTML = ''
            return true
        } else {
            document.getElementById('error').innerHTML = 'инн введён неверно'
            return false

        }
    }
    
    const dateValidation = () => {
        const dateStart = new Date(startDate)
        const dateEnd = new Date(endDate)
        const current = new Date()
        if (dateStart.getTime() > current.getTime() || dateEnd.getTime() > current.getTime()) {
            return false
        }
        if (dateStart.getTime() > dateEnd.getTime()) {
            return false
       }
       return true
    }

    const tonalityValidation = () => {
        if(tonality == '') {
            return false
        }
        return true
    }

    const limitValidation = () => {
        const numLimit = Number(limit)
        if(numLimit < 0 || numLimit > 1000 || limit == ''){
            return false
        }
        return true
        }    

    // ✔️✔️✔️

    return (
        <div>
            <input 
                type='text'  
                value={inn} 
                onChange={(e) => {setInn(e.target.value)}}/>
            <input 
                className='checkbox' 
                type='checkbox' 
                checked={maxFullness}
                onChange={() => {setMaxFullness(!maxFullness)
                    console.log(inn)
                }}/>
            <input
                className='checkbox' 
                type='checkbox'
                checked={inBusinessNews}
                onChange={() => {setInBusinessNews(!inBusinessNews)}}/>
            <input 
                className='checkbox' 
                type='checkbox' 
                checked={onlyMainRole}
                onChange={() => {setOnlyMainRole(!onlyMainRole)}}/>
            <select
                value={tonality}
                onChange={(e) => {setTonality(e.target.value)}}
            >   <option value=''>выберите тональность</option>
                <option value='positive'>позитивная</option>
                <option value='negative'>негативная</option>
                <option value='any'>любая</option>
            </select>
            <input 
                className='checkbox' 
                type='checkbox' 
                checked={onlyWithRiskFactors}
                onChange={() => {setOnlyWithRiskFactors(!onlyWithRiskFactors)}}/>
            <input 
                className='checkbox' 
                type='checkbox' 
                checked={excludeTechNews}
                onChange={() => {setExcludeTechNews(!excludeTechNews)}}/>
            <input 
                className='checkbox' 
                type='checkbox' 
                checked={excludeAnnouncements} 
                onChange={() => {setExcludeAnnouncements(!excludeAnnouncements)}}/>
            <input 
                className='checkbox' 
                type='checkbox' 
                checked={excludeDigests}
                onChange={() => {setExcludeDigests(!excludeDigests)}}/>
            <input 
                type='text'
                value={limit}
                onChange={(e) => {setLimit(e.target.value)}}/>
            <input 
                type='date'
                value={startDate}
                onChange={(e) => {setStartDate(e.target.value)}}/>
            <input 
                type='date'
                value={endDate}
                onChange={(e) => {setEndDate(e.target.value)}}/>
            
            <button onClick={() => {if (dateValidation() && innValidation() && limitValidation() && tonalityValidation()) {
                console.log('всё ок')
            } else {
                console.log('что то не так')
            }}}>
                Вход
            </button>
            <p></p>
            <div className='errors' id='error'>ошибка</div>


        </div>

    );
}

export default observer(HistogramsForm);

// store.histograms(
//                 startDate, endDate, inn, limit,
//                 maxFullness, inBusinessNews, onlyMainRole,
//                 tonality, onlyWithRiskFactors, excludeTechNews,
//                 excludeAnnouncements, excludeDigests                                       
//             )