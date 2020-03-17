import React from 'react'
import fakeAuth from '../auth'
import Login from '../pages/Login'
import HomePage from '../pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const Public = () => <h3>Public</h3>

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (

    <button onClick={() => {
      fakeAuth.signout(() => history.push('/'))
    }}>
    </button>

  ) : (
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
    )
))

export default function AuthExample() {
  return (
    <Router>
      <div>

        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <Route path="/teste" component={AuthButton} />
        <PrivateRoute path='/protected' component={HomePage} />
      </div>
    </Router>
  )
}