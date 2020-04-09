import React from 'react';
import '../styles/HomePage.css';
import { Pagination } from 'react-bootstrap';

const BookPagination = ({activePage, pageCount, visable, onClick}) => (
    
    <Pagination className={`book-pagination ${!visable && "hidden"}`}>
        <Pagination.First onClick={() => onClick(1)} />
        <Pagination.Prev
            disabled={activePage - 1 === 0}
            onClick={() => onClick(activePage - 1)} />
        <Pagination.Item 
            onClick={() => onClick(1)}
            className={activePage === 1 && "hidden"}>
            {1}
        </Pagination.Item>
        <Pagination.Ellipsis disabled className={activePage <= 4 && "hidden"} />

        <Pagination.Item 
            onClick={() => onClick(activePage - 2)}
            className={activePage <= 3 && "hidden"}>
                {activePage - 2}
        </Pagination.Item>
        <Pagination.Item
            onClick={() => onClick(activePage - 1)}
            className={activePage <= 2 && "hidden"}>
                {activePage - 1}
        </Pagination.Item>

        <Pagination.Item active>{activePage}</Pagination.Item>

        <Pagination.Item  
            onClick={() => onClick(activePage + 1)}
            className={activePage >= pageCount - 1 && "hidden"}>
                {activePage + 1}
        </Pagination.Item>
        <Pagination.Item 
            onClick={() => onClick(activePage + 2)}
            className={activePage >= pageCount - 2 && "hidden"}>
                {activePage + 2}
        </Pagination.Item>

        <Pagination.Ellipsis disabled className={activePage >= pageCount - 3 && "hidden"} />
        <Pagination.Item
            onClick={() => onClick(pageCount)}
            className={activePage === pageCount && "hidden"}>
                {pageCount}
        </Pagination.Item>
        <Pagination.Next
            disabled={activePage + 1 === pageCount + 1}
            onClick={() => onClick(activePage + 1)}/>
        <Pagination.Last onClick={() => onClick(pageCount)}/>
    </Pagination>
)

export default BookPagination;