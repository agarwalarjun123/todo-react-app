import React from 'react'
import * as _ from 'lodash'

function TodosComponent({ todos , deleteTodo }){
    
    let todoItems = todos.length  ? ( 
        _.map(todos,(todo)=>{
            return (
                <div className='collection-item card-panel teal lighten-2'  key = { todo.id }>
                    <span onClick = {() => deleteTodo(todo.id) }>{ todo.content }</span>
                </div>
            )
        })
    ):(
        <p className = 'center'>You have no todos left!<span role= 'img' aria-label = 'smile-emoji'>😆</span></p>
    )
     
    return(
        <div className = 'todo collection '>
            { todoItems }
        </div>
    ) 
}

export default TodosComponent