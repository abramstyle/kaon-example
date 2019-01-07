import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Helmet from 'react-helmet';
import Panel from '../../components/Panel';
import Post from '../../components/Post';

import { LOADING_STATES } from '../../../constants';
import postImg from '../Posts/posts.jpg';
import * as postActionCreators from './actions/post';
import './style.css';

const propTypes = {
  postActions: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

class PostDetail extends Component {
  loadPost() {
    const { postActions, match } = this.props;
    const { params: { id } } = match;

    postActions.fetchPost(id);
    console.log('routing: ', this.props);
  }

  componentDidMount() {
    const { post } = this.props;
    console.log(post.get('loadingState'));
    if (post.get('loadingState') !== LOADING_STATES.SUCCESS) {
      this.loadPost();
    }
  }

  componentDidUpdate() {
    console.log('update...');
  }

  componentDidCatch(err, info) {
    console.log('catch error: ', err);
    console.log('catdh info: ', info);
  }

  handleClickLoadMore() {
    this.loadPosts();
  }


  render() {
    const { post } = this.props;
    const background = (
      <img src={postImg} alt="Posts" />
    );
    return (
      <div className="posts">
        <Panel
          title="Post"
          background={background}
        >
          <Helmet>
            <html lang="zh-CH" country="cn" />
            <title>Post - Cybertron</title>
            <meta name="keywords" content="posts,cybertron,isomorphic" />
            <meta name="description" content="cybertron renders your components from server." />
          </Helmet>
          <Post post={post.get('post')} />
        </Panel>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { post } = state;
  return {
    post,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionCreators, dispatch),
  };
}

PostDetail.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
