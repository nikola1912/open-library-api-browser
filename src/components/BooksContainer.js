import React from 'react';
import '../styles/HomePage.css';
import { Card } from 'react-bootstrap';

const BooksContainer = ({books}) => (
    <div className="book-container">
        {books && books.map(book => (
            <BookCard 
                key={book.key}
                title={book.title}
                author={book.author}
                coverID={book.coverID}
                year={book.year} />
        ))}
    </div>
)

const BookCard = ({title, author, year, coverID}) => (
    <Card className="book-card">
        <Card.Body>
            <Card.Title className="book-title">{title}</Card.Title>
            <Card.Subtitle className="book-author">
                {"by " + (author !== undefined ? author : "")}
                <i className={author !== undefined && "hidden"}>unknown author</i>
            </Card.Subtitle>
        </Card.Body>
        <Card.Img
            className="book-cover"
            variant="top"
            src={`http://covers.openlibrary.org/b/OLID/${coverID}-L.jpg`} />
        <Card.Footer className="book-year">
            {"published in " + (year !== undefined ? year : "")}
            <i className={year !== undefined && "hidden"}>unknown year</i>
        </Card.Footer>
    </Card>
)

export default BooksContainer;