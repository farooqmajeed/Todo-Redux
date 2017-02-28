import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import 'bootstrap/dist/css/bootstrap.css';  
import { Breadcrumb, Jumbotron, BreadcrumbItem } from 'reactstrap';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  //Wraping up in Provider
  <Provider store={store}>
    <div>
    <Jumbotron>
        <h1 className="display-3">TODO APP USING REDUX</h1>
     </Jumbotron>

      <Breadcrumb>
          <BreadcrumbItem active>Add Todo Item</BreadcrumbItem>
      </Breadcrumb>
      <App/>
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
