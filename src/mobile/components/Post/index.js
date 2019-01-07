import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  post: PropTypes.object.isRequired,
};

function Post(props) {
  const { post } = props;
  return (
    <div styleName="post">
      <div styleName="title">{post.get('title')}</div>
      <div styleName="meta">
        <div styleName="comments item">
          <i className="ion-ios-chatbubbles" />
          <div styleName="text">
            {post.get('comments')}
          </div>
        </div>
        <div styleName="liked item">
          <i className="ion-ios-heart" />
          <div styleName="text">
            {post.get('liked')}
          </div>
        </div>
        <div styleName="author item">{post.get('author')}</div>
      </div>
      <div styleName="content">{post.get('content')}</div>
    </div>
  );
}

Post.propTypes = propTypes;

export default Post;
