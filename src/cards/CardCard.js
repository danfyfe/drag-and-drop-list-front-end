import React from 'react'

const CardCard = props => {

    const { cardObj, handleDragStart, handleDragEnd, handleDragOver, cardId, index } = props 
    const { title, content } = cardObj 

    return(
        <div id={cardId} draggable className='card' 
        onDragOver={e => handleDragOver(index)}
        onDragStart={ e => handleDragStart(index, e)}
        onDragEnd={e => handleDragEnd(index, e)}
        >
            <span>{title}</span>
            <p>{content}</p>
        </div>
    )
}

export default CardCard