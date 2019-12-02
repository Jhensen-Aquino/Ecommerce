import React from 'react';
import { connect } from 'react-redux';
import {saveProduct, saveProductServer} from '../../action/Product'

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productCode: '',
            product: ''
        };
    }

    handleChange = e =>this.setState({[e.target.name]:e.target.value});
        
    handleClick=()=>{
        console.log(this.state);
        this.props.saveClick(this.state);
        console.log(this.props.saveProduct);
    }

    render() {
        const formStyle = {
            "width": "400px",
            "marginTop": "70px",
            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
        
        return (
            <div>
                <form className="container jumbotron" style={formStyle}>
                    <h1>Add/Remove Products</h1>
                    <div className="form-group">
                        <label htmlFor="productCode">Product Code</label>
                        <input type="text" className="form-control" placeholder="Product Code" name="productCode" required onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <input type="text" className="form-control" placeholder="Product" name="product" required onChange={this.handleChange}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        saveClick: (userDetails)=>dispatch(saveProductServer(userDetails))
    }
}

const mapStateToProps = ({saveProduct}) => {
    return{
        saveProduct
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);