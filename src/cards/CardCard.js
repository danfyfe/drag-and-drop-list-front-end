import React from 'react'

const CardCard = props => {

    const { cardObj, handleDragStart, cardId } = props 
    const { title, content } = cardObj 

    return(
        <div id={cardId} draggable className='card' onDragStart={ () => handleDragStart(cardObj, cardId)}>
            <span>{title}</span>
            <p>{content}</p>
        </div>
    )
}

export default CardCard