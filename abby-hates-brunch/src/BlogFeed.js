import React, {Component} from 'react';
import BlogPreview from './BlogPreview.js';

class BlogFeed extends Component {

    render(){
        return(
            <div className="blog-feed">
                <BlogPreview/>
                <BlogPreview/>
                <BlogPreview/>
            </div>
        );
    }
}
export default BlogFeed;