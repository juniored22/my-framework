import React from 'react';
import './styles.css'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state        = { 'active': false, 'theme': 'dark', 'classExtra': '', 'value': '' };
    this.handleChange = this.handleChange.bind(this);
    this.inputRef     = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const theme       = this.props.theme
    const classExtra  = this.props.classExtra ? this.props.classExtra : ''
    const placeholder = this.props.placeholder ? this.props.placeholder : ''
    const value       = this.props.value
    const name        = this.props.name ? this.props.name : ''
    const type        = this.props.type ? this.props.type : 'text'

    return (<input ref={this.inputRef} type={type} className={`input_ts ${theme} ${classExtra}`} name={name} placeholder={placeholder} value={this.state.value} onChange={this.handleChange}></input>);
  }
}

export default Input;