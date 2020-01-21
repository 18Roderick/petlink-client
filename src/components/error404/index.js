import React from 'react';
import { withRouter } from 'react-router-dom';

import { Result, Button } from 'antd';

const Error404 = props => {
	const { history, location } = props;
	console.log(props);
	return (
		<Result
			status="404"
			title="404"
			subTitle="Los sentimos, La pagina que buscas no existe o fue borrada"
			extra={
				<Button type="primary" onClick={() => history.goBack()}>
					Regresar
				</Button>
			}
		/>
	);
};

export default withRouter(Error404);
