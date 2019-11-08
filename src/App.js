import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardsContainer from './containers/CardContainer'

export const CardContext = React.createContext({})
export const CardContextProvider = CardContext.Provider
export const CardContextConsumer = CardContext.Consumer

function App() {


    const cardObjects = [
        { id: 1, title: 'Buttz!', content: 'Blah blah blah!' },
        { id:2, title: 'Not Buttz!', content: 'Whatever!' },
        { id:3, title: 'Also not Buttz!', content: 'You dont know!' }
    ]


    return (
        <div>
            <CardContextProvider value={cardObjects}>
                <CardsContainer />
            </CardContextProvider>
        </div>
        )
    }

    export default App;