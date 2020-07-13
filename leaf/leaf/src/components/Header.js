import React, { Component } from 'react'

class Header extends Component {
  classes = {
    h1: 'w-100 p-3 text-center',
    div: 'bg-light'
  }

  render() {
    var classes = this.classes;
    return (
      <div className={classes.div}>
        <h1 className={classes.h1}>
          cuteplants.net
        </h1>
      </div >
    )
  }
}

export default Header;