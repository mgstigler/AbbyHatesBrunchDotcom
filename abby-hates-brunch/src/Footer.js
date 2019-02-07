import React, {Component} from 'react';
import './App.css';

let footerVals = ["About Us","Contact Us"]
class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="footer-value">
                    {footerVals}
                </div>
            </div>
        );
    }
}
export default Footer;