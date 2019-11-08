import React from 'react'
import CardList from '../lists/CardList'

const CardContainer = props => {

    // const cardObjects = [
    //     { id: 1, title: 'Buttz!', content: 'Blah blah blah!' },
    //     { id:2, title: 'Not Buttz!', content: 'Whatever!' },
    //     { id:3, title: 'Also not Buttz!', content: 'You dont know!' }
    // ]

    // const cardObjects = useContext(CardContext)

    return (
            <div className='card-container'>
                <h1>Cards!</h1>
                <hr width={'75%'}/>
                <CardList />
            </div>
    )
}

export default CardContainer