import React, { Component } from 'react'
import { connect } from 'react-redux';
import { optionSelected } from '../actions';

class Option extends Component {
  classes = {
    div: 'bg-dark d-flex justify-content-between d-sm-block mt-1 mb-1 mr-sm-2 ml-sm-2 mt-sm-0 mb-sm-0',
    h3: 'p-3 text-light align-self-center text-sm-center',
    img: 'img-fluid'
  }

  render() {
    var classes = this.classes;
    var option = this.props.option;
    var title = option.title;
    return (
      <div onClick={this.props.optionSelected} className={classes.div}>
        <h3 className={classes.h3}>{title}</h3>
        <img className={classes.img} src='./logo192.png' alt='testimg' />
      </div>
    )
  }
}

export default connect(null, { optionSelected })(Option);