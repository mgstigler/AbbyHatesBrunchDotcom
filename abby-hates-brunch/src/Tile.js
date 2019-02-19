import React, {Component} from 'react';
import './Tile.css';

class Tile extends Component {
    render(){

        // If there is no associated picture load the no-picture view
        if (this.props.picture === undefined){
            return(
                <div className="blog-tile no-picture">
                    <div className="preview-title">{this.props.blog.BlogTitle}</div>
                    <div className="preview-text">{}</div>
                </div>
            );
        } else {
            return (
                <div className="blog-tile">
                    <div className="picture"></div>
                    <div className="blog-title">{this.props.blog.BlogTitle}</div>
                    <div className="blog-body"></div>
                </div>
            );
        }
    }
}
export default Tile;