import React from 'react'
import CardCard from '../cards/CardCard'

const CardList = props => {

    const { cardObjects } = props
    
    const renderCards = cardObjs => {
        return cardObjs.map( cardObj => {
            return <CardCard key={cardObj.id} cardObj={cardObj}/>
        })
    }
    return(
        <div className='card-list'>
            { renderCards(cardObjects) }
        </div>
    )
}

export default CardList