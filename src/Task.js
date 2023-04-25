
import React from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'
class Task extends React.Component {
    render() {
        if(this.props.size>1){
            if(this.props.tasks.id==1)
            {
                return (
                    <div className="task">
                        <p>{this.props.tasks.task}</p>
                    </div>
                )
            }
            else
            {
                return (
                    <div className="task">
                        <IoCloseCircleSharp className="delete"/>
                        <p>{this.props.tasks.task}</p>
                    </div>
                )
            }
            
        }
        else
        {
            return(
                <div className="task">
                <p>{this.props.tasks.task}</p>
                <p>Задачи отсутствуют</p>
            </div>

            )
            
            }
            
            
    }

}

export default Task
