import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import ProductList from './components/product/ProductList';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h3>Product List App</h3>
          <Link to="/index">Home</Link>|
          <Link to="/add">Add</Link>
          <br/><br/>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/index" exact component={ProductList}></Route>
          <Route path="/add" exact component={AddProduct}></Route>
          <Route path="/edit/:id" exact component={EditProduct}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
