import React, {Component} from 'react';
import './BlogPreview.css';
class BlogPreview extends Component {
    render(){
        return (
            <div className="blog-preview">
                <div className="preview-picture"></div>
                <div className="preview-title"></div>
                <div className="preview-text"></div>
            </div>
        );
    }
}
export default BlogPreview;