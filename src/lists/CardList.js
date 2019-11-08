import React, { useContext } from 'react'
import CardCard from '../cards/CardCard'
import { CardContext } from '../App'


const CardList = props => {

    const cardObjects = useContext(CardContext)

    const handleDragStart = (cardObj, cardId) => {
        const card = document.getElementById(cardId)
        card.style.backgroundcolor = 'red'
        console.log(card)
    }

    const renderCards = cardObjs => {
        return cardObjs.map( cardObj => {
            return <CardCard key={cardObj.id} cardId={cardObj.id} cardObj={cardObj} handleDragStart={handleDragStart}/>
        })
    }



    return(
        <div className='card-list'>
            { renderCards(cardObjects) }
        </div>
    )
}

export default CardList