import React from "react";
import { Card, Badge } from 'react-bootstrap';
import Ratings from "../ratings/Ratings";


const ReviewCard = ({ data }) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(data.date);
    const reviewDate = date.toLocaleDateString("en-US", options);

    return (
        <Card className="border border-dark border-4 h-100">
            <Card.Header className="bg-dark text-light border-dark rounded-0">
                <Card.Title className="text-truncate">{data.title}</Card.Title>
                <div className="d-flex mx-0 justify-content-between mt-3">
                    <Badge className="d-flex align-items-center bg-dark">
                        <Ratings ratings={data.ratings} />
                    </Badge>
                    <Badge className="d-flex align-items-center bg-white text-dark">{reviewDate}</Badge>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>{data.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;
