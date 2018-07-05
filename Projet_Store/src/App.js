import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

//Style
//import $ from 'jquery';
//import './materialize/js/materialize.js'
//import './materialize/js/materialize.min.js';
import './materialize/css/materialize.min.css';
import './App.css';

//Composant importer
//---Composant statique----
import Entete from "./Components/Entete";
import Apropos from "./Components/Apropos";
//import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
//---Composant Dynamique
import Accueil from "./Components/Accueil";
import Prestation from "./Components/Prestation";
import Media from "./Components/Media";
import Forum from "./Components/Forum";
import NotFound from "./Components/NotFound";

class App extends Component {

	render() {
		return (
				<div className="body">
					<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> 
	     			<script type="text/javascript" src="materialize/js/materialize.min.js"></script>
	     			<script type="text/javascript" src="materialize/js/carousel_js.js"></script> 
					<Router>
					<div>
						<Entete/>
						<div id="CorpPage">
							<Apropos/>
							<section id="corpsPage">
								

<Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="/carousel.png" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;

								<Switch>
									<Route exact path="/" component={Accueil}/>
									<Route path="/prestation" component={Prestation}/>
									<Route path="/media" component={Media}/>
									<Route path="/forum" component={Forum}/>
									<Route component={NotFound}/>
								</Switch>
							</section>
						</div>
					<Footer />
					</div>
					</Router>

				</div>

		)
	}


}

export default App;
