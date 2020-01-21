import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from '../home';
import Linker from '../linker';
import adopta from '../adopta';
import Error404 from '../error404';
import LoginUsuario from '../auth/login';

import AdminSwitch from '../../admin/components/Switcher';

import { rutas } from '../routerRoutes';

function SwitcherRoutes() {
	const location = useLocation();

	useEffect(() => {
		console.log(location.pathname);
	}, [location]);

	return (
		<React.Fragment>
			{location.pathname === '/admin' ? (
				<AdminSwitch />
			) : (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/linker" component={Linker} />
					<Route exact path="/adopta" component={adopta} />
					<Route exact path="/auth/login" component={LoginUsuario} />
					<Route component={Error404} />
				</Switch>
			)}
		</React.Fragment>
	);
}

export default SwitcherRoutes;
