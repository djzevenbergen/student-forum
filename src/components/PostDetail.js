import React from "react";
import PropTypes from "prop-types";
import DateTime from "./DateTime";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function PostDetail(props) {
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle><h1>{post.title}</h1></CardTitle>
          <CardSubtitle><DateTime time={post.time} /> -- <h3>{post.upvotes}</h3></CardSubtitle>
          <CardText>{post.body}</CardText>
          <button onClick={props.onClickingEdit}>Update Post</button>
          <button className="upVote" onClick={() => props.onClickingDelete(post.id)}>Delete</button>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func

};

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};



CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool
};


CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

export default PostDetail;