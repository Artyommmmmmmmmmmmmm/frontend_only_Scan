import React from 'react'
import '../SearchResult.css'

const Solo = ({item}) => {
    return (
    <div className='main-card-cont'>
        <div className='card-inner-cont'>
            <p className='card-date-text'>{`
            ${item.ok.issueDate.slice(8, 10)}.
            ${item.ok.issueDate.slice(5, 7)}.
            ${item.ok.issueDate.slice(0, 4)}
            `} <span className='card-src'>{item.ok.source.name}</span>
            </p>
            <div className='card-title'>{item.ok.title.text}</div>
            <div className='searchres-badges-cont'>
                {item.ok.attributes.isAnnouncement ?
                <div className='announcement-badge'>Анонс</div>  
                :
                null
                }
                {item.ok.attributes.isTechNews ?
                <div className='technews-badge'>Технические новости</div>  
                :
                null
                }
                {item.ok.attributes.isDigest ?
                <div className='digest-badge'>Дайджест</div>  
                :
                null
                }
            </div>
            <img alt='card image' className='card-img'></img>
            <div className='card-text-cont'>{item.ok.content.markup}</div>
            <div className='card-btn-cont'>
                <button className='card-btn'> Читать в источнике</button>
                <span>{`${item.ok.attributes.wordCount} слова`}</span>
            </div>
        </div>
    </div> 
    )
}


export default Solo;