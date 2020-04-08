import React from 'react';
import SearchForm from './SearchForm.js';

const SEARCH_API = "http://openlibrary.org/search.json?";

class HomePage extends React.Component {
    state = {
        isLoading: false,
        error: null
    }

    handleCloseError() {
        this.setState({error: null});
    }

    handleSearchSubmit(data) {
        const query = data.searchType === "All" ? "q" : data.searchType.toLowerCase();
        const searchData = data.searchField.replace(/ /g, "+");
        console.log(`${SEARCH_API}${query}=${searchData}`);
        this.setState({ isLoading: true });
        fetch(`${SEARCH_API}${query}=${searchData}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ isLoading: false });
                console.log(data.docs.slice(0, 10));
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        return (
            <div className="home-page"> 
                <SearchForm
                    onSubmit={(event) => this.handleSearchSubmit(event)}
                    isLoading={this.state.isLoading}
                    error={this.state.error} 
                    closeError={() => this.handleCloseError()}/>
            </div>
        )
    }
}

export default HomePage;