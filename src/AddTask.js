
import React from 'react'

class AddTask extends React.Component {
    constructor(props){
        super(props)
        this.state={
            task: "",
            check: false
        }
        
    }
    render() {
        return (
            <form>
                <label htmlFor="newTask">Добавить задачу:</label>
                <input placeholder='Новая задача' id='newTask' onChange={(e)=>this.setState({task: e.target.value})}/>
                <button type='button' onClick={()=>this.props.onAdd({task: this.state.task, check: this.state.check})}>Добавить</button>
            </form>
        )
    }

}

export default AddTask
