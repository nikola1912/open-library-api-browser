import React from 'react';
import '../styles/HomePage.css';
import { Pagination } from 'react-bootstrap';

const BookPagination = ({activePage, pageCount, visable}) => {

    return (
        <Pagination className={`book-pagination ${!visable && "hidden"}`}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item className={activePage === 1 && "hidden"}>
                {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled className={activePage <= 4 && "hidden"} />

            <Pagination.Item className={activePage <= 3 && "hidden"}>
                    {activePage - 2}
            </Pagination.Item>
            <Pagination.Item className={activePage <= 2 && "hidden"}>
                    {activePage - 1}
            </Pagination.Item>

            <Pagination.Item active>{activePage}</Pagination.Item>

            <Pagination.Item  className={activePage >= pageCount - 1 && "hidden"}>
                {activePage + 1}
            </Pagination.Item>
            <Pagination.Item  className={activePage >= pageCount - 2 && "hidden"}>
                {activePage + 2}
            </Pagination.Item>

            <Pagination.Ellipsis disabled className={activePage >= pageCount - 3 && "hidden"} />
            <Pagination.Item className={activePage === pageCount && "hidden"}>
                {pageCount}
            </Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
};

export default BookPagination;