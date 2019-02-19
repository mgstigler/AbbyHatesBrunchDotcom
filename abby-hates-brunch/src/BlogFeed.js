import React, {Component} from 'react';
import Tile from './Tile.js';
import {API} from './Constants.js';
import MoonLoader from 'react-spinners/MoonLoader';

class BlogFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogPreviews: undefined
        }
    }
    //After the component mounts, send a fetch request for blog previews
    componentDidMount(){
        fetch(API + '/blogs')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({blogPreviews: data.Items})
            })
            .catch(error => console.log(error));
    }

    render(){
        if (this.state.blogPreviews === undefined){
            return(
                <div className="blog-feed-loading">
                <MoonLoader/>
                </div>
            );
        }
        return(
            <div className="blog-feed">
                {this.state.blogPreviews.map(blogPreview => <Tile key={blogPreview.BlogID} blog={blogPreview}/>)}
            </div>
        );
    }
}
export default BlogFeed;