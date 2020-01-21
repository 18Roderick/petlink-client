import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<React.Fragment>
			<h1> Pagina de inicio</h1>
			<Link to="/admin">Ir a Administrativo</Link>
		</React.Fragment>
	);
};
