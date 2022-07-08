import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Selamat Datang {this.props.nama}</h1>
      </div>
    )
  }
}

export default Welcome