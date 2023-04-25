
import React from 'react'
import { IoCloseCircleSharp} from 'react-icons/io5'
import { AiOutlineCheck } from 'react-icons/ai'
class Task extends React.Component {
    render() {
        if(this.props.size>1){
            if(this.props.tasks.id==1)
            {
                return (
                    <div className="taskHead">
                        <p>{this.props.tasks.task}</p>
                    </div>
                )
            }
            else
            {
                if(this.props.tasks.check)
                {
                    return (
                        <div className="taskRight">
                            <IoCloseCircleSharp className="delete" onClick={()=>this.props.onDel(this.props.tasks.id)}/>
                            <AiOutlineCheck className="check" onClick={()=>this.props.onCek(this.props.tasks)}/>
                            <p>{this.props.tasks.task}</p>
                            <b>{this.props.tasks.check ? 'Выполнено' : 'Не выполнено'}</b>
                        </div>
                    )

                }
                else
                {
                    return (
                        <div className="task">
                            <IoCloseCircleSharp className="delete" onClick={()=>this.props.onDel(this.props.tasks.id)}/>
                            <AiOutlineCheck className="check" onClick={()=>this.props.onCek(this.props.tasks)}/>
                            <p>{this.props.tasks.task}</p>
                            <b>{this.props.tasks.check ? 'Выполнено' : 'Не выполнено'}</b>
                        </div>
                    )
                }
                
            }
            
        }
        else
        {
            return(
                <div className="taskHead">
                <p>{this.props.tasks.task}</p>
                <p>Задачи отсутствуют</p>
            </div>
            )
        }
            
            
    }

}

export default Task
