import React from 'react';
import { connect } from 'react-redux';
import { loginServer } from '../../action/Login';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            userType: '',
            isLoggedIn: false
        };
    }

    handleChange = e =>this.setState({[e.target.name]:[e.target.value]});
        
    handleClick=()=>{
        console.log(this.state);
        this.props.loginClick(this.state);
        console.log(this.props.login);
    }

    render() {
        const formStyle = {
            "width": "400px",
            "marginTop": "70px",
            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
        const iconStyle = {
            "width": "100px",
            "height": "100px"
        }
        
        return (
            <div>
                <form className="container jumbotron" style={formStyle}>
                    <img src="https://cambodiafoods.com/wp-content/uploads/2017/03/admin-icon.png" style={iconStyle} alt="icon"></img>
                    <h1>Please Sign In</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="username" required onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" autoComplete="on" required onChange={this.handleChange}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.handleClick}>Login</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        loginClick: (userDetails)=>dispatch(loginServer(userDetails))
    }
}

const mapStateToProps = ({login}) => {
    return{
        login
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);