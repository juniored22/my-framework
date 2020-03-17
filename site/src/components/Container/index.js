import React from 'react'
import './styles.css'
class Containe extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 'active': false, 'className': null , 'theme': null};
  }

  render() {    
    const styleLine   = this.props.styleLine
    const classExtra  = this.props.classExtra
    return (
 
      <div className={`container ${classExtra}`}  style={styleLine}>
        {this.props.children}
      </div>
    )
  }
}

export default Containe;