import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import Product from '../Product/Product';

export default class Client extends React.Component{
    render(){
        return(
            <div className="content">
                <header>
                <Link to="client/product" >Product</Link>
                <Link to="/page2" >Page 2</Link>
                <Link to="/page3" >Page 3</Link>
                </header>
                <div>
                <BrowserRouter>
                    <Route path="/client/product" component={Product}/>
                </BrowserRouter>
                </div>
            </div>
        )
    }
}