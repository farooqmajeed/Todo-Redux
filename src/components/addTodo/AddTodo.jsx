import React, { Component } from 'react';
import './AddTodo.css';
import {Button, } from 'reactstrap';
class AddTodo extends Component {

  constructor(){
    super();
    this.state = {
      todoDescription : ""
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(){
    console.log(this.refs.todoText.value);
    this.props.addTodoEvent(this.refs.todoText.value);
  }

  render() {
    return (
      <div >
        
        <input type="text" ref="todoText" placeholder="Add Todo"/><br />
        <Button color = "primary" onClick={this.addTodo}> Add </Button>
      </div>
    );
  }
}

export default AddTodo;
