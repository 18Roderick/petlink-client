import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from '../Home';
import Error404 from '../../../components/error404';

function SwitcherRoutes() {
	const location = useLocation();

	useEffect(() => {
		console.log(location.pathname);
	}, [location]);

	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/admin" component={Home} />
				<Route component={Error404} />
			</Switch>
		</React.Fragment>
	);
}

export default SwitcherRoutes;
