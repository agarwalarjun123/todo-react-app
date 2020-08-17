import React,{Component} from 'react';
import * as _ from 'lodash'
import AddForm from './AddForm'
import TodosComponent from './todoComponent'

class App extends Component{
  state = {
    todos:[
    ]
  } 
  deleteTodo = (id) =>{
    console.log(id)
    let todos = _.filter(this.state.todos,(todo) => todo.id !== id )
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.floor(Math.random()*10000)
    let todos = this.state.todos
    todos.push(todo)
    this.setState({
      todos
    })
  } 
  render(){
      return (
        
        <div className = 'app container'>
          <h1 className = 'center blue-text'>Todos</h1>
          <TodosComponent todos = { this.state.todos } deleteTodo = { this.deleteTodo } />
          <AddForm addTodo = { this.addTodo } />
        </div>
      )
    }
} 
export default App;
