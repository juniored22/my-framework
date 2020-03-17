import React, { Component } from 'react';
import './styles.css'

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = { 'active': false, 'theme': 'dark' };
  }

  render() {
    const theme         = this.props.theme
    const classExtra    = this.props.classExtra
    const onClick       = this.props.onClick
    const onDoubleClick = this.props.onDoubleClick

    return (<button type="submit" className={`btn ${theme} ${classExtra}`} onClick={onClick} onDoubleClick={onDoubleClick}> {this.props.children} </button>);
  }

}

export default Button;