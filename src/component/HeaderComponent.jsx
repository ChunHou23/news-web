import React, { useState } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { findNewsData } from '../redux/actions/NewsAction';
import { SearchFilter } from '../enums/SearchFilterEnum'; 

const HeaderComponent = ({
    searchNews,
}) => {
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleFilter = (value) => {
        setSelectedFilter(value);
    }

    const searchForNews = () => {
        searchNews(searchQuery, selectedFilter);
    }

    const checkCurrentFilter = (currentFilter) => {
        if (selectedFilter === currentFilter) {
            return "fw-bold"
        }
    }


    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">News API Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex w-100 justify-content-center align-items-center">
                        <Form.Control
                            type="search"
                            placeholder="Search For News"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearchQuery}
                        />
                        <Dropdown className='pe-2'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Filter By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item className={checkCurrentFilter(SearchFilter.POPULARITY)} onClick={() => handleFilter(SearchFilter.POPULARITY)}>Popularity</Dropdown.Item>
                                <Dropdown.Item className={checkCurrentFilter(SearchFilter.RELEVANCY)} onClick={() => handleFilter(SearchFilter.RELEVANCY)}>Relevancy</Dropdown.Item>
                                <Dropdown.Item className={checkCurrentFilter(SearchFilter.DATE_POSTED)} onClick={() => handleFilter(SearchFilter.DATE_POSTED)}>Date Posted</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button active variant="outline-success" onClick={() => searchForNews()}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    searchNews: (query, filter) => dispatch(findNewsData(query, filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);