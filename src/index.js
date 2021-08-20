import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import Home from './components/Home';

// Css
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
