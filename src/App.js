import React from 'react';
import { Provider } from 'react-redux';
import BasicCalculator from './containers/basic-calculator';
import store from './redux';

export default function App() {
	return (
		<Provider store={store}>
			<BasicCalculator />
		</Provider> 
  	);
}
