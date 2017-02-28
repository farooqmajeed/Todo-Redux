import { createStore } from 'redux'
import { combineReducers } from 'redux';
import TodoListReducer from './reducers/todoReducer';
import 'bootstrap/dist/css/bootstrap.css';  
export const rootReducer = combineReducers({
    TodoListReducer

})

let store = createStore(rootReducer)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
