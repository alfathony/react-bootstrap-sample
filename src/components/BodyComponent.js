import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import	ItemList from './CardComponent.js'

class Body extends Component {

	render(){
		return(
			<Fragment>
				<Container>
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