import React from 'react';
import SearchForm from './SearchForm.js';

const SEARCH_API = "http://openlibrary.org/search.json?";

class HomePage extends React.Component {

    handleSearchSubmit(data) {
        const query = data.searchType === "All" ? "q" : data.searchType.toLowerCase();
        const searchData = data.searchField.replace(/ /g, "+");
        console.log(`${SEARCH_API}${query}=${searchData}`);
        fetch(`${SEARCH_API}${query}=${searchData}`)
            .then(response => response.json())
            .then(data => console.log(data.docs.slice(0, 10)));
    }

    render() {
        return (
            <SearchForm onSubmit={(event) => this.handleSearcSubmit(event)} />
        )
    }
}

export default HomePage;