import React from 'react';
import '../css/BookDetails.css';

function BookDetails(props) {
    const { title, author, coverImage, description } = props;

    return (
        <div className="book-details">
            <div className="cover-image">
                <img src={coverImage} alt={`Cover of ${title}`} />
            </div>
            <div className="book-info">
                <h2>{title}</h2>
                <p className="author">{author}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default BookDetails;