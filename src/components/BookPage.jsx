import React from 'react';
import '../styles/BookPage.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BOOK_API = 'https://openlibrary.org/api/books?bibkeys=';

class BookPage extends React.Component {
    state = {}

    formatBookDetailsData(data, bookID) {
        const book = data["OLID:" + bookID];
        return {
            "title": book.title,
            "pages": book.number_of_pages,
            "author": book.authors[0].name,
            "date": book.publish_date,
            "subjects": book.subjects && book.subjects.map(subject => subject.name),
            "subjectPlaces": book.subject_places && book.subject_places.map(subject => subject.name),
            "subjectPeople": book.subject_people && book.subject_people.map(subject => subject.name),
            "coverUrl": book.cover.large,
            "openlibraryUrl": book.url
        }
    }

    componentDidMount() {
        const bookID = this.props.match.params.id;
        console.log("Fetching...");
        console.log(bookID);
        fetch(`${BOOK_API}OLID:${bookID}&jscmd=data&format=json`)
            .then(response => response.json())
            .then(data => this.setState({ ...this.formatBookDetailsData(data, bookID) },
                () => console.log(this.state)))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="book-page">
                <Link to="/">
                    <Button variant="primary">Home</Button>
                </Link>

                <div className="title">
                    {this.state.title}
                </div>

                <div className="author">
                    {"by " + (this.state.author !== undefined ? this.state.author : "")}
                    <i className={this.state.author !== undefined ? "hidden" : ""}>unknown author</i>
                </div>

                <div className="cover-container">
                    <img alt="Book Cover" className="cover" src={this.state.coverUrl}></img>
                </div>

                <div className="date">
                    <b>{"Published: "}</b>
                    {this.state.date !== undefined ? this.state.date : ""}
                    <i className={this.state.date !== undefined ? "hidden" : ""}>unknown date</i>
                </div>
                
                <div className="subjects">
                    <b>{"Subjects: "}</b>
                    {this.state.subjects ? this.state.subjects.join(", ") : "none"}
                </div>

                <div className="subject-places">
                    <b>{"Places: "}</b>
                    {this.state.subjectPlaces ? this.state.subjectPlaces.join(", ") : "none"}
                </div>

                <div className="subject-people">
                    <b>{"People: "}</b>
                    {this.state.subjectPeople ? this.state.subjectPeople.join(", ") : "none"}
                </div>

                <Button variant="info">
                    <a className="link" rel="noopener noreferrer" target="_blank" href={this.state.openlibraryUrl}>
                        Open Library
                    </a>
                </Button>
            </div>
        )
    }
}


export default BookPage;