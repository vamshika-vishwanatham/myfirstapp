import React, { Component } from 'react';
import './FormComponent.css';

class FormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
        this.state = {
            password: ''
        }
    }

    handleUsernameChange = (user) => {
        this.setState({
            username: user.target.value
        })
    }

    handleOnClick=()=> {
        this.props.history.push('/home',{name:this.state.username});
    }

    render() {

        return (
            <div>
                <h3>Please Click login</h3>
                <div className="tabel">
                    <form className="formtabel" >
                        <div >
                            <label>UserName: </label>
                            <input type="text " value={this.state.username} onChange={this.handleUsernameChange} />
                        </div><br />
                        <div>
                            <label>Password: </label>
                            <input type="password" />
                        </div><br />
                        <div>
                            <button type="submit" onClick={this.handleOnClick}>login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormComponent;