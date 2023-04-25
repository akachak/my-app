
import React from 'react'
import Header from './Header'
import Tasks from './Tasks'



class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header title="Таскер" />
                <main>
                    <Tasks />
                </main>
                <aside>
                  
                </aside>
            </div>
            

        )
    }
    
}

export default App
