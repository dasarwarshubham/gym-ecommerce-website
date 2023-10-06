import React from "react";
import { Col, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ totalPages, currentPage, handlePageChange }) => {


    const handleEllipsisClick = (newPage) => {
        // Handle ellipsis click to jump to a specific page
        handlePageChange(newPage);
    };

    const items = [];

    if (totalPages <= 1) {
        items.push(
            <Pagination.Item
                key="first"
                active={currentPage === 1}
                onClick={() => handlePageChange(1)}
            >
                1
            </Pagination.Item>
        );
    } else {
        items.push(
            <Pagination.First
                key="goto-first"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            />
        );

        // Previous Page
        items.push(
            <Pagination.Prev
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
        );

        // First Page
        items.push(
            <Pagination.Item
                key="first"
                active={currentPage === 1}
                onClick={() => handlePageChange(1)}
            >
                1
            </Pagination.Item>
        );

        // Ellipsis for long lists (start)
        if (currentPage > 4) {
            items.push(
                <Pagination.Ellipsis
                    key="ellipsis-start"
                    onClick={() => handleEllipsisClick(currentPage - 5)}
                />
            );
        }

        // Middle pages
        for (
            let page = Math.max(currentPage - 2, 2);
            page <= Math.min(currentPage + 2, totalPages - 1);
            page++
        ) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </Pagination.Item>
            );
        }

        // Ellipsis for long lists (end)
        if (currentPage < totalPages - 3) {
            items.push(
                <Pagination.Ellipsis
                    key="ellipsis-end"
                    onClick={() => handleEllipsisClick(currentPage + 5)}
                />
            );
        }

        // Last Page
        items.push(
            <Pagination.Item
                key="last"
                active={currentPage === totalPages}
                onClick={() => handlePageChange(totalPages)}
            >
                {totalPages}
            </Pagination.Item>
        );

        // Next Page
        items.push(
            <Pagination.Next
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        );

        // Last Page
        items.push(
            <Pagination.Last
                key="goto-last"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
            />
        );
    }

    return (
        <Row className="mx-0 my-5 pb-5">
            <Col xs={12} className="d-flex justify-content-center">
                <Pagination className="mb-0">{items}</Pagination>
            </Col>
        </Row>
    )
};

export default PaginationComponent;
