import React from 'react'
import {withRouter} from 'react-router-dom'

const Error404 = (props) => {
    const {history, location} = props
    console.log(props)
    return(<div>
        <h1> Error 404 {location.pathname}</h1>
        <button onClick={history.goBack}>Regresar</button>
    </div>)
}


export default withRouter(Error404)
