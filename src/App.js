
import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'


class App extends React.Component {
  
constructor(props){
  super(props)
  this.state={
    tasks : [
      {
          id: 1,
          task: "Задачи:",
          check: false
      }
  ]
  }
  this.addTask=this.addTask.bind(this);
  this.deleteTask=this.deleteTask.bind(this);
  this.checkTask=this.checkTask.bind(this);
}
    render() {
        return (
            <div>
                <Header title="Таскер" />
                <main>
                    <Tasks tasks={this.state.tasks} onDel={this.deleteTask} onCek={this.checkTask}/>
                </main>
                <aside>
                  <AddTask onAdd={this.addTask}/>
                </aside>
            </div>
            

        )
    }

    checkTask(task)
    {
      let newTask={id: task.id, task: task.task, check: true}
      let allTask=this.state.tasks
      allTask[task.id-1]=newTask

      this.setState({
        tasks: []
      }, ()=>{this.setState({tasks: [...allTask]})})
      
    }
    


    deleteTask(id){
      this.setState({
        tasks: this.state.tasks.filter((el)=> el.id !== id)
      })

    }

    addTask(task){
      const id=this.state.tasks.length+1;
      this.setState({ tasks: [...this.state.tasks, {id,...task}]})
    }
    
}

export default App
