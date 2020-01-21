import React from 'react';

import { ConfigProvider } from 'antd';

import Navigation from './components/navbar';

import './index.css';

import 'antd/dist/antd.css';

function App() {
	return (
		<ConfigProvider>
			<Navigation />
		</ConfigProvider>
	);
}

export default App;
