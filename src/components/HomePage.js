import React from 'react';
import SearchForm from './SearchForm.js';
import BooksContainer from './BooksContainer.js';

const BOOKS = require('./data.json');

const SEARCH_API = "http://openlibrary.org/search.json?";

class HomePage extends React.Component {
    state = {
        data: null,
        isLoading: false,
        error: null
    }

    handleCloseError() {
        this.setState({error: null});
    }

    formatData(data) {
        return {
            "start": data.start,
            "bookCount": data.num_found,
            "books": data.docs.slice(0, 51).map(book => { 
                return {
                    "title": book.title,
                    "key": book.key,
                    "author": book.author_name !== undefined ?
                        book.author_name[0] : "unknown author",
                    "coverID": book.cover_edition_key,
                    "year": book.first_publish_year !== undefined ?
                    book.first_publish_year : "unknown year"
                }
            })
        }
    }

    handleSearchSubmit(data) {
        const query = data.searchType === "All" ? "q" : data.searchType.toLowerCase();
        const searchData = data.searchField.replace(/ /g, "+");
        this.setState({ isLoading: true });
        fetch(`${SEARCH_API}${query}=${searchData}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: this.formatData(data),
                    isLoading: false
                });
                console.log(this.state.data.books.slice(0, 20));
            })
            .catch(error => this.setState({error, isLoading: false}));
        /* console.log(this.formatData(BOOKS));
        this.setState({ data: this.formatData(BOOKS) }); */
    }

    render() {
        return (
            <div className="home-page">
                <SearchForm
                    onSubmit={(event) => this.handleSearchSubmit(event)}
                    isLoading={this.state.isLoading}
                    error={this.state.error}
                    closeError={() => this.handleCloseError()}/>
                <BooksContainer books={this.state.data && this.state.data.books} />
            </div>
        )
    }
}

export default HomePage;