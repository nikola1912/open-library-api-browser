import React from 'react';
import SearchForm from './SearchForm.jsx';
import BookContainer from './BookContainer.jsx';
import BookPagination from './BookPagination.jsx';

const SEARCH_API = "http://openlibrary.org/search.json?";

class HomePage extends React.Component {
    state = {
        data: null,
        isLoading: false,
        error: null,
        activePage: 1,
        pageCount: 1,
        booksPerPage: 20,
        paginationVisable: false
    }

    handlePageChange(newPage) {
        this.setState({ activePage: newPage });
    }

    handleCloseError() {
        this.setState({ error: null });
    }

    formatBookSearchData(data) {
        return {
            "start": data.start,
            "bookCount": data.docs.length,
            "books": data.docs.map(book => { 
                return {
                    "title": book.title,
                    "key": book.key,
                    "OLID": book.edition_key && book.edition_key[book.edition_key.length-1],
                    "author": book.author_name && book.author_name[0],
                    "coverID": book.cover_edition_key,
                    "year": book.first_publish_year
                }
            })
        }
    }

    handleSearchSubmit(data) {
        const query = data.searchType === "All" ? "q" : data.searchType.toLowerCase();
        const searchData = data.searchField.replace(/ /g, "+");
        this.setState({ isLoading: true });
        fetch(`${SEARCH_API}${query}=${searchData}&mode=ebooks&has_fulltext=true`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: this.formatBookSearchData(data),
                    paginationVisable: true,
                    isLoading: false
                }, () => {
                    const pageCount = Math.floor(this.state.data.bookCount / this.state.booksPerPage);
                    this.setState({ pageCount: pageCount === 0 ? 1 : pageCount });
                });
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        const firstBookIndex = (this.state.activePage - 1) * this.state.booksPerPage;
        const lastBookIndex = this.state.activePage * this.state.booksPerPage;
        return (
            <div className="home-page">
                <SearchForm
                    onSubmit={(event) => this.handleSearchSubmit(event)}
                    isLoading={this.state.isLoading}
                    error={this.state.error}
                    closeError={() => this.handleCloseError()}/>

                <BookPagination
                    onClick={(newPage) => this.handlePageChange(newPage)}
                    visable={this.state.paginationVisable}
                    activePage={this.state.activePage}
                    pageCount={this.state.pageCount} />

                <BookContainer
                    visable={!(this.state.data === null)}
                    books={this.state.data &&
                        this.state.data.books.slice(firstBookIndex, lastBookIndex)} />

                <BookPagination
                    onClick={(newPage) => this.handlePageChange(newPage)}
                    visable={this.state.paginationVisable}
                    activePage={this.state.activePage}
                    pageCount={this.state.pageCount} />
            </div>
        )
    }
}

export default HomePage;