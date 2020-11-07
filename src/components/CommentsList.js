import React from 'react';

const CommentsList = ({ comments }) => (
    <React.Fragment>
        {comments.map((comment, i) => (
            <div key={i} className="comment">
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </React.Fragment>
)

export default CommentsList;