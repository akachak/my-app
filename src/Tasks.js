import React from 'react'
import Task from './Task'

class Tasks extends React.Component {
    
    

    render() {
        return (
            <div className="main-cointainer">
                {this.props.tasks.map((el) => (
                    <Task key={(el.id)} tasks={el} size={this.props.tasks.length} onDel={this.props.onDel} onCek={this.props.onCek}/>
                ))}

            </div>
        )
    }
 
    
}


export default Tasks