import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Row, Col, Layout } from 'antd';

import SwitchRouter from '../switchRouter';

import './index.css';

export default function NavHeader() {
	const [active, setActive] = React.useState('');

	return (
		<React.Fragment>
			<nav className="navbar-container">
				<div className="brand-title">
					<h4>
						<Link to="/">Petlink</Link>
					</h4>
				</div>
				<ul className="ul-nav">
					<li>
						<Link to="/adopta">Adopta</Link>
					</li>
					<li>
						<Link to="/linker">Linker</Link>
					</li>
				</ul>

				<div className={`burger ${active}`} onClick={e => e}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>

			<SwitchRouter />
		</React.Fragment>
	);
}
