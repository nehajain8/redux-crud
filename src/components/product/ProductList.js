import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
    edit(e){
        var id = e.target.getAttribute('date-key');
        this.props.dispatch({
            type: 'EDIT_PRODUCT',
            id: id
        });
        this.props.history.push('/edit/' + id);
    }
    delete(e){
        var id = e.target.getAttribute('date-key');
        this.props.dispatch({
            type: 'DELETE_PRODUCT',
            id: id
        });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>                                                                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(function(product, index){  
                            return <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><input type="button" value="Edit"
                                        onClick={this.edit.bind(this)} date-key={product.id} /> |
                                        <input type="button" value="Delete"
                                        onClick={this.delete.bind(this)} date-key={product.id} 
                                        />
                                    </td>
                                </tr>
                            }, this)
                        }
                    </tbody>
                </table>
            </div>
        );
    }   
}

function mapStateToProps(state){
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(ProductList);