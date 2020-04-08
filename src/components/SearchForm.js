import React from 'react';
import { InputGroup, DropdownButton, Dropdown, FormControl, Form, Button } from 'react-bootstrap';


class SearchForm extends React.Component {
    state = {
        searchField: "",
        searchType: ""
    }

    handleTypeChange(event) {
        console.log(event);
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
            <Form onSubmit={event => this.handleFormSubmit(event)}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Search Type"
                        id="input-group-dropdown-1"
                        onSelect={event => this.handleTypeChange(event)}
                    >
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
                        onChange={event => this.handleFormChange(event)}
                        aria-describedby="basic-addon1" />
                    <Button type="submit">Submit</Button>
                </InputGroup>
            </Form>
        )
    }
}

export default SearchForm;