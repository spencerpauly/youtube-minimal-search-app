import React from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './Searchbar.css';

class Searchbar extends React.Component {
    state = {
        term: 'Default text'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault(); 
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <Form className="youtubeSearchbar" onSubmit={this.handleSubmit}>
                <FormControl onChange={this.handleChange} type="text" placeholder="Search YouTube" autoFocus="autofocus" className="mr-sm-2" />                
            </Form>
           
        )
    }
}
export default Searchbar;