import React from 'react';
import '../../styles/HomePage.css';
import { Card } from 'react-bootstrap';

const BookContainer = ({books, onClick}) => (
    <div className="book-container">
        {books && books.map(book => (
            <BookCard
                onClick={(OLID) => onClick(OLID)}
                key={book.key}
                OLID={book.OLID}
                title={book.title}
                author={book.author}
                coverID={book.coverID}
                year={book.year} />
        ))}
    </div>
)

const BookCard = ({OLID, title, author, year, coverID, onClick}) => (
    <Card 
        onClick={() => onClick(OLID)}
        className="book-card">
        <Card.Body>
            <Card.Title className="book-title">{title}</Card.Title>
            <Card.Subtitle className="book-author">
                {"by " + (author !== undefined ? author : "")}
                <i className={author !== undefined ? "hidden" : ""}>unknown author</i>
            </Card.Subtitle>
        </Card.Body>
        <Card.Img
            className="book-cover"
            variant="top"
            src={`http://covers.openlibrary.org/b/OLID/${coverID}-L.jpg`} />
        <Card.Footer className="book-year">
            {"published in " + (year !== undefined ? year : "")}
            <i className={year !== undefined ? "hidden" : ""}>unknown year</i>
        </Card.Footer>
    </Card>
)

export default BookContainer;