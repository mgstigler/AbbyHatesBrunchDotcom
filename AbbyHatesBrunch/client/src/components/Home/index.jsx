import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';

import { Form } from '../../components/Article';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { onLoad } = this.props;

    axios('https://7ysnsc056c.execute-api.us-east-1.amazonaws.com/dev/blogs')
      .then((res) => onLoad(res.data));
  }

  handleDelete(id) {
    const { onDelete } = this.props;

    return axios.delete(`https://7ysnsc056c.execute-api.us-east-1.amazonaws.com/dev/blog?BlogID=${id}`)
      .then(() => onDelete(id));
  }

  handleEdit(article) {
    const { setEdit } = this.props;

    setEdit(article);
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">AbbyHatesBrunch.</h1>
          </div>
          <Form />
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            {articles.map((article) => {
              return (
                <div className="card my-3">
                  <div className="card-header">
                    {article.BlogTitle}
                  </div>
                  <div className="card-body">
                    {article.BlogContent}
                    <p className="mt-5 text-muted"><b>abby stigler</b></p>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <button onClick={() => this.handleEdit(article)} className="btn btn-primary mx-3">
                        Edit
                      </button>
                      <button onClick={() => this.handleDelete(article.BlogID)} className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.home.articles,
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: 'HOME_PAGE_LOADED', data }),
  onDelete: id => dispatch({ type: 'DELETE_ARTICLE', id }),
  setEdit: article => dispatch({ type: 'SET_EDIT', article }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);