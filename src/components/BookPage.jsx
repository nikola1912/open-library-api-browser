import React from 'react';
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
            "year": book.publish_date,
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
            <div>
                {this.state.title}
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
        )
    }
}


export default BookPage;