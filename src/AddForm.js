import React,{Component} from 'react'

class AddForm extends Component{
    state = {
        content : "",
        error: ""       
    }
    render(){
        return (
            <div className = 'form'>
                <form onSubmit = { this.onSubmit }>
                <label>Add new Todo:</label>  
                <input type = 'text' id = 'todo' value = {this.state.content} onChange ={this.onChangeEvent} />
                <span className = 'error'>{this.state.error.length ? this.state.error : ""}</span>
                </form>
            </div>
        )
    }
    onChangeEvent = (e) =>{
        this.setState({
            content: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        if(this.state.content.length > 0){
            this.props.addTodo(this.state)
            this.setState({error: ""}) 
        }
        else{
            this.setState({
                error: "note cannot be empty",
            })
        }
        this.setState({
            content: "",
        })
        

    }

}

export default AddForm
