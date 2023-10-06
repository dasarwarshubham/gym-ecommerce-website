import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

// import required Components
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../components/loader/Loader";

// import required redux selectors
import {
	selectAllCategories,
	selectLoadingStatus,
	selectError,
} from "../../redux/product/productSelectors";

// import required redux actions
import { retrieveCategories } from "../../redux/product/productActions";

import * as ROUTES from "../../constants/routes"


const CategoryList = () => {

	const dispatch = useDispatch();
	const loading = useSelector(selectLoadingStatus);
	const categories = useSelector(selectAllCategories);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(retrieveCategories());
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "75vh" }}
			>
				<h1>{error}</h1>
			</div>
		);
	}

	return (
		<Container className="my-5 py-5">
			{categories.map((category, idx) => (
				<Row key={`cetegory-${idx}`} className="my-5 py-md-5 mx-0 px-3">
					<Col lg={3} md={5} sm={{ span: 6, order: idx % 2 === 0 ? "first" : "last" }} className="d-flex">
						<Link to={`${ROUTES.EQUIPMENTS}/${category.title.toLowerCase()}`} className="d-flex w-100">
							<img src={category.image} alt={category.title} className="img-fluid w-100 object-fit-cover rounded-3" />
						</Link>
					</Col>
					<Col lg={9} md={7} sm={{ span: 6, order: idx % 2 === 0 ? "last" : "first" }}>
						<h3 className="fs-3">{category.title}</h3>
						<p>{category.description}</p>
						<Link
							to={`${ROUTES.EQUIPMENTS}/${category.title.toLowerCase()}`}
							className="link-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
							style={{
								"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)"
							}}
						>
							click here&nbsp;
							<svg xmlns="http://www.w3.org/2000/svg" className="bi" width={14} aria-hidden="true" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
						</Link>
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default CategoryList;
