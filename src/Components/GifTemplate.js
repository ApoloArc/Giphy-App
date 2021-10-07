import React from 'react'
import PropTypes from 'prop-types'
export const GifTemplate = ({title, url})=> {
    return (
        <div className='card animate__animated animate__fadeInDown'>
            <img src={url} alt={title}/>
            <p className='title-card'>{title}</p>
        </div>
    )
}

GifTemplate.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
