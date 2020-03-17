import React                                from 'react'
import Auth                                 from '../../auth'
import { Redirect }                         from 'react-router-dom'
import { FontAwesomeIcon }                  from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt }              from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faTwitter }  from '@fortawesome/free-brands-svg-icons';
import logo                                 from '../../assets/logo.png'
import Containe                             from '../../components/Container/'
import Button                               from '../../components/Button/';
import Input                                from '../../components/Input/';
import axios                                from 'axios';
import './styles.css'
import '../../assets/css/main.css'

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 'active': false, 'class_name': 'container', 'theme': '', redirectToReferrer: false, 'textButtoLogin':'ACESSAR'};
    this.inputEmailRef = React.createRef()
    this.inputPassRef = React.createRef()
    this.clicked = false
  }

  login = async () => {
    if (!this.clicked) {
      this.clicked = true
      this.setState({active:'active'})
      let { email, password } = { email: this.inputEmailRef.current.state.value, password: this.inputPassRef.current.state.value }
      
      let resul = await Auth.authenticate({ email, password })

      resul ? alert(resul.token) : alert(false)
      this.clicked = false
      this.setState({active:false})
    }
  }


  componentDidMount() {

  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <Containe theme={this.state.theme} classExtra="login" >
        <a className={"link_sign"} href="/teste"> <FontAwesomeIcon icon={faSignInAlt} size="lg" /> Sign up</a>
        <img ref={this.referenc} src={logo} className={"logo_login"} alt=""></img>
        <Input ref={this.inputEmailRef} type="text" placeholder="E-mail"  ></Input>
        <Input ref={this.inputPassRef} type="password" placeholder="Senha" ></Input>

        <Button theme={this.state.theme} classExtra={`btn_acessa ${this.state.active}`} onClick={this.login} >
          {this.state.textButtoLogin}
        </Button>
        <div>
          <p className="text_font_13">ou acessar usando </p>
        </div>
        <div className="div_social_ts">
          <Button theme={this.state.theme} classExtra="cicle color_blue_ts">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Button>
          <Button theme={this.state.theme} classExtra="cicle color_red_ts">
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </Button>
          <Button theme={this.state.theme} classExtra="cicle color_blue_light_ts">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Button>
        </div>
      </Containe>

    )
  }
}

export default Login;