import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PostItem.css';

const propTypes = {
  post: PropTypes.object.isRequired,
};

function PostItem(props) {
  const { post } = props;
  const postTarget = `/post/${post.get('id')}`;
  return (
    <div styleName="post">
      <Link
        to={postTarget}
        styleName="title"
      >
        {post.get('title')}
      </Link>
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
    </div>
  );
}

PostItem.propTypes = propTypes;

export default PostItem;
