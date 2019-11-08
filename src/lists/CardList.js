import React, { useContext, useState } from 'react'
import CardCard from '../cards/CardCard'
import { CardContext } from '../App'


const CardList = props => {

    // const cardObjects = useContext(CardContext)
    
    const origCardObjects = [
        { id: 1, title: 'Buttz!', content: 'Blah blah blah!' },
        { id:2, title: 'Not Buttz!', content: 'Whatever!' },
        { id:3, title: 'Also not Buttz!', content: 'You dont know!' }
    ]

    const [ cardObjects, setCardObjects ] = useState(origCardObjects)
    const [ draggedItem, setDraggedItem ] = useState()

    const handleDragStart = (index, e) => {
        // e.target.className = 'card-drag'
        let draggedCard = cardObjects[index]

        setDraggedItem(draggedCard)

        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/html', e.target)
        e.dataTransfer.setDragImage(e.target, 20, 20)
    }

    const handleDragEnd = (index, e) => {
        // e.target.className = 'card'

   
    }

    const handleDragOver = index => {
        const draggedOverCard = cardObjects[index]

        if( draggedOverCard === draggedItem) {
            return;
        }

        let items = cardObjects.filter( item => item !== draggedItem)

        items.splice(index, 0, draggedItem)

        setCardObjects(items)
    }

    const renderCards = cardObjs => {
        return cardObjs.map( (cardObj, index) => {
            return <CardCard key={cardObj.id} 
            cardId={cardObj.id} cardObj={cardObj} 
            handleDragStart={handleDragStart} 
            handleDragEnd={handleDragEnd}
            handleDragOver={handleDragOver}
            index={index}/>
        })
    }


    return(
        <div className='card-list'>
            { renderCards(cardObjects) }
        </div>
    )
}

export default CardList