import React from 'react'
import Selector from './Selector';

function Selectors(props) {
  return props.selectors.map((s) => <Selector key={s.name} selector={s} />);
}

export default Selectors;