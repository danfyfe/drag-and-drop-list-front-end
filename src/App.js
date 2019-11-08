import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardsContainer from './containers/CardContainer'

function App() {
    const cardObjects = [
        { id: 1, title: 'Buttz!', content: 'Blah blah blah!' },
        { id:2, title: 'Not Buttz!', content: 'Whatever!' },
        { id:3, title: 'Also not Buttz!', content: 'You dont know!' }
    ]

    const context = React.createContext(cardObjects)


    return (
        <div>
            <context.Provider>
                <CardsContainer cardObjects={cardObjects}/>
            </context.Provider>
            
        </div>
        )
    }

    export default App;