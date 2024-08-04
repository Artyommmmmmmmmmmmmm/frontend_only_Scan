import React from 'react'
import '../SearchResult.css'

const Pare = ({item1, item2}) => {
    return (
    <div className='card-pare-cont'>
        <div className='main-card-cont'>
            <div className='card-inner-cont'>
                <p className='card-date-text'>{`
                ${item1.ok.issueDate.slice(8, 10)}.
                ${item1.ok.issueDate.slice(5, 7)}.
                ${item1.ok.issueDate.slice(0, 4)}
                `} <span className='card-src'>{item1.ok.source.name}</span>
                </p>
                <div className='card-title'>{item1.ok.title.text}</div>
                <div className='searchres-badges-cont'>
                    {item1.ok.attributes.isAnnouncement ?
                    <div className='announcement-badge'>Анонс</div>  
                    :
                    null
                    }
                    {item1.ok.attributes.isTechNews ?
                    <div className='technews-badge'>Технические новости</div>  
                    :
                    null
                    }
                    {item1.ok.attributes.isDigest ?
                    <div className='digest-badge'>Дайджест</div>  
                    :
                    null
                    }
                </div>
                <img alt='card image' className='card-img'></img>
                <div className='card-text-cont'>{item1.ok.content.markup}</div>
                <div className='card-btn-cont'>
                    <button className='card-btn'> Читать в источнике</button>
                    <span>{`${item1.ok.attributes.wordCount} слова`}</span>
                </div>
            </div>
        </div>
        <div className='main-card-cont'>
            <div className='card-inner-cont'>
                <p className='card-date-text'>{`
                ${item2.ok.issueDate.slice(8, 10)}.
                ${item2.ok.issueDate.slice(5, 7)}.
                ${item2.ok.issueDate.slice(0, 4)}
                `} <span className='card-src'>{item2.ok.source.name}</span>
                </p>
                <div className='card-title'>{item2.ok.title.text}</div>
                <div className='searchres-badges-cont'>
                    {item2.ok.attributes.isAnnouncement ?
                    <div className='announcement-badge'>Анонс</div>  
                    :
                    null
                    }
                    {item2.ok.attributes.isTechNews ?
                    <div className='technews-badge'>Технические новости</div>  
                    :
                    null
                    }
                    {item2.ok.attributes.isDigest ?
                    <div className='digest-badge'>Дайджест</div>  
                    :
                    null
                    }
                </div>
                <img alt='card image' className='card-img'></img>
                <div className='card-text-cont'>{item2.ok.content.markup}</div>
                <div className='card-btn-cont'>
                    <button className='card-btn'> Читать в источнике</button>
                    <span>{`${item2.ok.attributes.wordCount} слова`}</span>
                </div>
            </div>
        </div>
    </div>        
    )
}

export default Pare
