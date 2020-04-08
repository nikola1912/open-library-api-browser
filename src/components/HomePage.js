import React from 'react';
import SearchForm from './SearchForm.js';

class HomePage extends React.Component {

    handleSearcSubmit(data) {
        console.log(data);
    }

    render() {
        return (
            <SearchForm onSubmit={(event) => this.handleSearcSubmit(event)} />
        )
    }
}

export default HomePage;