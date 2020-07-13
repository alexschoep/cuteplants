import React, { Component } from 'react'
import Suggestion from './Suggestion'

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/plants?id=1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          suggestions: json
        })
      });
  }

  render() {
    var suggestions = this.state.suggestions;
    return (
      <div>
        <h2>Suggestions</h2>
        {suggestions && suggestions.map((s) => <Suggestion key={s.fields.name} suggestion={s} />)}
      </div>
    )
  }
}

export default Suggestions;