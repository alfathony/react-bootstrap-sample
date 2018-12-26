import React, { Component, Fragment } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import axios from 'axios';

import	ItemList from './CardComponent.js'

class Body extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gaBrowser: [],
		};

	}

	componentWillMount(){
		// Make a request for a user with a given ID
		axios.get('http://ga-reporting-v4-php.test/?dimensions=browser')
		.then(response => {
			// console.log(response.data.reports[0].data.rows);
			this.setState({ gaBrowser : response.data.reports[0].data.rows })
		})
		.catch(error => {
		// handle error
		console.log(error);
		})
	}


	render(){
		return(
			<Fragment>
				<Container>
					<Row style={{ marginBottom: '24px' }}>
						<Col md="6">
							<ListGroup>
								{
									this.state.gaBrowser.map((item, index) => {
										return(
											<ListGroupItem key={index}>{ item.dimensions[0] } { item.metrics[0].values[0] }</ListGroupItem>
										)
									})
								}
					      	</ListGroup>
						</Col>
					</Row>

					<Row>
						<Col md="4">
							<ItemList title="This is Title"/>
						</Col>
						<Col md="4">
							<ItemList title="Was using props"/>
						</Col>
						<Col md="4">
							<ItemList title="Awesome"/>
						</Col>
					</Row>
				</Container>
			</Fragment>
		);
	}
}

export default Body;