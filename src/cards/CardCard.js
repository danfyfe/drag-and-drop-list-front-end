import React from 'react'

const CardCard = props => {

    const { cardObj } = props 
    const { title, content } = cardObj 

    return(
        <div draggable className='card'>
            <span>{title}</span>
            <p>{content}</p>
        </div>
    )
}

export default CardCard