import React, { createContext } from 'react'
import CardList from '../lists/CardList'

const CardContainer = props => {

    const { cardObjects } = props

    return (
        <div className='card-container'>
            <h1>Cards!</h1>
            <hr width={'75%'}/>
            <CardList cardObjects={cardObjects}/>

        </div>
    )
}

export default CardContainer