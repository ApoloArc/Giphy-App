import React from 'react'

export const GifTemplate = ({id, title, url})=> {
    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={url} alt={title}/>
            <p className='title-card'>{title}</p>
        </div>
    )
}
