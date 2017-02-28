import React, { Component } from 'react';
import './TodoItem.css';
import 'bootstrap/dist/css/bootstrap.css';  
import { Button } from 'reactstrap';
class TodoItem extends Component {

  constructor(props){
    super(props);    
    this.state = {
      doEdit : false,
      todo : props.todo.text
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editToggle = this.editToggle.bind(this);
    this.editSave = this.editSave.bind(this);
    this.todoTextOnChange = this.todoTextOnChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  
  deleteTodo(){
   
    this.props.deleteTodo(this.props.todo.id);
  }

  editToggle(){
    this.setState({doEdit:!this.state.doEdit});
  }

  editSave(){
    this.setState({doEdit:!this.state.doEdit});
    this.props.editTodo(this.props.todo.id,this.props.index,this.state.todo)
  
    
  }

  todoTextOnChange(e){
    this.setState({todo:e.target.value});
  }

  toggleTodo(e){
    console.log(e.target.value);
    console.log(e.target.checked);
  
    this.props.toggleTodo(this.props.todo.id,this.props.index);
  }

  renderDisplayTodo(){
    return (<div>
              <br /><span style={{margin:"5px"}}><input type="checkbox" onChange={this.toggleTodo} checked={this.props.todo.completed}/></span>
              <span className="todoText">{this.props.todo.text}</span>
               <span style={{margin:"5px"}}><Button  color="danger" onClick={this.deleteTodo}>Delete</Button></span>
              <span style={{margin:"5px"}}> <Button color="success" onClick={this.editToggle}>Edit!</Button></span>  
              
          </div>)
  }

  renderEditTodo(){
    return (<div>
    
              <span style={{margin:"5px"}}><input type="checkbox" onChange={this.toggleTodo} checked={this.props.todo.completed}/></span>
              <span><input type="text" value={this.state.todo} onChange={this.todoTextOnChange} /></span>
              <span style={{margin:"5px"}}><Button color="primary" onClick={this.editSave}>Save</Button></span>              
        
        </div>)
  }

  renderBasedOnCondition(){
    var item = null;
    if(this.state.doEdit){
      item = this.renderEditTodo();
    }
    else {
      item = this.renderDisplayTodo();
    }
    return item;
  }

  render() {
    return (
      <li>
        <div>
          
          {this.renderBasedOnCondition()}                  
        </div>
      </li>      
    );
  }
}

export default TodoItem;
