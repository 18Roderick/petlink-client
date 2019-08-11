import React, { Component } from 'react'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      message: ''
    }
  }

  componentDidMount = async () => {
    try {
      const data = await fetch('http://localhost:4000')
      const {message }= await data.json()
      this.setState({
        message
      })
    } catch (error) {
      this.setState({
        message: error
      })
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
