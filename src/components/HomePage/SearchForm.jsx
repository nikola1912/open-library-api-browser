import React from 'react';
import { InputGroup, DropdownButton, Dropdown, FormControl, Form, Button } from 'react-bootstrap';
import { Spinner, Alert } from 'react-bootstrap';

class SearchForm extends React.Component {
    state = {
        searchField: "",
        searchType: "Title"
    }

    handleTypeChange(event) {
        this.setState({searchType: event});
    }

    handleFormChange(event) {
        this.setState({searchField: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Form 
                className="search-form"
                onClick={this.props.closeError}
                onSubmit={event => this.handleFormSubmit(event)}>
                    
                <InputGroup>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={this.state.searchType}
                        id="input-group-dropdown-1"
                        onSelect={event => this.handleTypeChange(event)}>
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
                            <Dropdown.Item eventKey="Author">Author</Dropdown.Item>
                            <Dropdown.Item eventKey="Text">Text</Dropdown.Item>
                            <Dropdown.Item eventKey="Subject">Subject</Dropdown.Item>
                            <Dropdown.Item eventKey="Lists">Lists</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="Advanced">Advanced</Dropdown.Item>
                    </DropdownButton>

                    <FormControl 
                        value={this.state.searchField} 
                        onChange={event => this.handleFormChange(event)} />

                    <Button type="submit">
                        {this.props.isLoading ? <>
                            <Spinner
                                as="span"
                                animation="border"
                                role="status"
                                size="sm"
                            /> Loading...</> : "Submit"}
                    </Button>
                </InputGroup>

                {this.props.error ? 
                    <Alert variant="danger" dismissible>
                        Something went wrong, try again?
                    </Alert> : ""}
            </Form>
        )
    }
}

export default SearchForm;