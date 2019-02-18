import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProduct extends Component {
    constructor(){
        super();
        this.state={
            id:'',
            name:'',
            price: 0
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    } 
    handleSubmit = (e) => {
       e.preventDefault();
       this.props.dispatch({
            type: 'ADD_PRODUCT',
            product: this.state 
       });
       this.props.history.push('/');
    }
    render() {
        const { id, name, price } = this.state;
        return (
            <div>
                <h3>Add Product</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="id" placeholder="Id" value={id} onChange={this.handleInputChange}/>
                    <br/><br/>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleInputChange}/>
                    <br/><br/>
                    <input type="text"  name="price" placeholder="Price" value={price} onChange={this.handleInputChange}/>
                    <br/><br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }   
}



export default connect()(AddProduct); 