import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
	Provider
} from "react-redux";
// Faut RETIRER les  comm avec des -- pour utiliser les futur Reducer ^^

//--import configureStore from './Components/services'; Sert aux futur reducer ^^

/*
	The store is initialize during the reconnect workflow
	You can find this workflow insde the workflow folder/login
	Called on each route to check user context
*/
//--const store = configureStore({

//--});


/*
	First thing first
	npm install --save redux react-redux
*/

/*--const Application = (props) => (
	<Provider store={store}>
		<App/>
	</Provider>
)
--*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
