import React, { Component } from 'react'

class Suggestion extends Component {
  render() {
    return (
      <div>
        <p>{this.props.suggestion.fields.name}</p>
      </div>
    )
  }
}

export default Suggestion;