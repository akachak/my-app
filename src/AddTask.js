
import React from 'react'

class AddTask extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="newTask">Добавить задачу:</label>
                <input placeholder='Новая задача' id='newTask' />
                <button type='button'>Добавить</button>
            </form>
        )
    }

}

export default AddTask
