import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Parrafo from './components/Parrafo.jsx'
import Titulo from './components/Titulo.jsx'
import Container from './components/Container.jsx'
import { Col,Row,Grid,Jumbotron } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
	
      <div className="App">
		<Grid>
		    <Row className="show-grid">
		 		<Col xs={6} md={3}>
					<Jumbotron>
						<Titulo titulo="20"/>
						<Parrafo parrafo="New followers add this month" />
					</Jumbotron>
				</Col>
				<Col xs={6} md={3}>
					<Jumbotron>
						<Titulo titulo="$1250"/>
						<Parrafo parrafo="Average Monthly Income" />
					</Jumbotron>
				</Col>
				<Col xs={6} md={3}>
					<Jumbotron>
						<Titulo titulo="$13865"/>
						<Parrafo parrafo="Yearly Income Goal" />
					</Jumbotron>
				</Col>
				<Col xs={6} md={3}>
					<Jumbotron>
						<Titulo titulo="18°"/>
						<Parrafo parrafo="Paris" />
					</Jumbotron>
				</Col>
			 </Row>
			<Row className="show-grid">
				<Col xs={6} md={9}>
					<Row className="show-grid">
						<Container/>
					</Row>
					<Row className="show-grid">
						<Container/>
					</Row>
				</Col>
				<Col xs={6} md={3}>
					<Row className="show-grid">
						<Container titulo="Hola"/>
					</Row>
					<Row className="show-grid">
						<Container/>
					</Row>
					<Row className="show-grid">
						<Container/>
					</Row>
					<Row className="show-grid">
						<Container/>
					</Row>
				</Col>
			</Row>
		</Grid>s
      </div>
    );
  }
}

export default App;
