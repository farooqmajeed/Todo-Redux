import React, { Component } from 'react';
import './TodoList.css';
import { TodoItem } from '../../components'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class TodoList extends Component {

  constructor(){
    super();
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.editTodoItem = this.editTodoItem.bind(this);
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
  }

  deleteTodoItem(id,itemIndex){
    this.props.deleteTodo(id,itemIndex);
  }

  editTodoItem(id,itemIndex, updateTodoText){
    this.props.editTodo(id,itemIndex,updateTodoText);
  }

  toggleTodoItem(id,itemIndex){
    this.props.toggleTodo(id,itemIndex);
  }

  render() {
    return (
      <div>  
        <br/>
        <br/>
        <ol>
        
     {
            this.props.todoObj.todoList.filter(todo=> {
              return todo.completed === false;
            }).map((todo,index)=> {
              return <TodoItem key={todo.id} 
                        todo={todo} 
                        index={todo.id}
                        deleteTodo={this.deleteTodoItem}
                        editTodo={this.editTodoItem}
                        toggleTodo={this.toggleTodoItem}
                        />
            })
          }  
        </ol> 
        
        <Breadcrumb>
          <BreadcrumbItem active>COMPLETED TODO LIST</BreadcrumbItem>
      </Breadcrumb>

        <br/>
        <ol>
          {
            this.props.todoObj.todoList.filter(todo=> {
              return todo.completed === true;
            }).map((todo,index)=> {
              return <TodoItem key={todo.id} 
                        todo={todo} 
                        index={todo.id}
                        deleteTodo={this.deleteTodoItem}
                        editTodo={this.editTodoItem}
                        toggleTodo={this.toggleTodoItem}
                        />
            })
          }  
        </ol>  
          
      </div>
    );
  }
}

export default TodoList;
