
import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'



class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Таскер" />
                <main>
                    <Tasks />
                </main>
                <aside>
                  <AddTask />
                </aside>
            </div>
            

        )
    }
    
}

export default App
