import React from 'react';
import './BlogCard.css'
const BlogCard = ({ blogs }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={blogs.authorImg} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{blogs.author}</h6>
                    <p className="m-0">{blogs.date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{blogs.title}</h5>
                <p className="card-text text-secondary mt-4">{blogs.description}</p>
            </div>
        </div>
    );
};

export default BlogCard;