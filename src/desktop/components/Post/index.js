import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  post: PropTypes.object.isRequired,
};

function Post(props) {
  const { post } = props;
  return (
    <div className="post">
      <div className="title">{post.get('title')}</div>
    </div>
  );
}

Post.propTypes = propTypes;

export default Post;
