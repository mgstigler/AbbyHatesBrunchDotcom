import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BlogTitle: '',     
      BlogContent: ''
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.articleToEdit) {
      this.setState({
        BlogTitle: nextProps.articleToEdit.BlogTitle,
        BlogContent: nextProps.articleToEdit.BlogContent
      });
    }
  }

  handleSubmit(){
    const { onSubmit, articleToEdit, onEdit } = this.props;
    const { BlogTitle, BlogContent } = this.state;

    if(!articleToEdit) {
      return axios.put('https://7ysnsc056c.execute-api.us-east-1.amazonaws.com/dev/blog', {
        BlogTitle,
        BlogContent
      }, {
        headers: {'Authorization': 'YOURKEY'}
      })
        .then((res) => onSubmit(res.data))
        .then(() => this.setState({ BlogTitle: '', BlogContent: '' }));
    } else {
      return axios.patch(`https://7ysnsc056c.execute-api.us-east-1.amazonaws.com/dev/blog/${articleToEdit._id}`, {
        BlogTitle,
        body,
        author,
      })
        .then((res) => onEdit(res.data))
        .then(() => this.setState({ BlogTitle: '', BlogContent: ''}));
    }
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { articleToEdit } = this.props;
    const { BlogTitle, BlogContent } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('BlogTitle', ev)}
          value={BlogTitle}
          className="form-control my-3"
          placeholder="Article BlogTitle"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('BlogContent', ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={BlogContent}>
        </textarea>
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">{articleToEdit ? 'Update' : 'Submit'}</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({ type: 'SUBMIT_ARTICLE', data }),
  onEdit: data => dispatch({ type: 'EDIT_ARTICLE', data }),
});

const mapStateToProps = state => ({
  articleToEdit: state.home.articleToEdit,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);