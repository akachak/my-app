import React from 'react'
import Task from './Task'

class Tasks extends React.Component {
    
    tasks = [
        {
            id: 1,
            task: "Задачи:",
        }
    ]

    render() {
        return (
            <div className="main-cointainer">
                {this.tasks.map((el) => (
                    <Task key={(el.id)} tasks={el} size={this.tasks.length}/>
                ))}

            </div>
        )
    }
 
    
}


export default Tasks