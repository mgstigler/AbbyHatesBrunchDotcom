import React, {Component} from 'react';
import './App.css'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {classes: "header"}
    }

    toggleHide(){
        if (this.state.classes === "header"){
            this.setState({classes: "header closed"});
        } else {
            this.setState({classes: "header"});
        }
    }
    render(){
        return(
            <div className={this.state.classes} onClick={() => this.toggleHide()}>
                <p className="header-title"> Abby Hates Brunch</p>
            </div>
        );
    }
}

export default Header;