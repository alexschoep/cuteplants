import React, { Component } from 'react'
import Option from './Option';

class Selector extends Component {
  classes = {
    div1: 'mt-3 mb-3 bg-light',
    h4: 'w-100 p-3 text-light bg-primary',
    div2: 'd-flex flex-column flex-sm-row justify-content-center'
  }

  render() {
    var classes = this.classes;
    var selector = this.props.selector;
    return (
      <div className={classes.div1}>
        <h4 className={classes.h4}>{selector.description}</h4>
        <div className={classes.div2}>
          {selector.options.map((o) => <Option key={o.title} option={o} />)}
        </div>
      </div>
    )
  }
}

export default Selector;