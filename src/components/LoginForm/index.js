import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginBgContainer,
  LoginFormPage,
  LoginLogo,
  LoginInputContainer,
  LoginInput,
  LoginLabel,
  ShowPasswordContainer,
  CheckBoxInput,
  CheckBoxInputLabel,
  LoginButton,
  LoginErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrMsg: false,
    errMsg: '',
  }

  failureLogin = errMsg => {
    this.setState({showErrMsg: true, errMsg})
  }

  successfulLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.successfulLogin(data.jwt_token)
    } else {
      this.failureLogin(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, showErrMsg, errMsg} = this.state
    const pwtype = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginBgContainer isDarkTheme={isDarkTheme}>
              <LoginFormPage
                onSubmit={this.submitForm}
                isDarkTheme={isDarkTheme}
              >
                {isDarkTheme ? (
                  <LoginLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LoginLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                <LoginInputContainer>
                  <LoginLabel isDarkTheme={isDarkTheme} htmlFor="username">
                    USERNAME
                  </LoginLabel>
                  <LoginInput
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.changeUsername}
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginLabel isDarkTheme={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </LoginLabel>
                  <LoginInput
                    type={pwtype}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.changePassword}
                  />
                </LoginInputContainer>
                <ShowPasswordContainer>
                  <CheckBoxInput
                    id="showpassword"
                    value={showPassword}
                    type="checkbox"
                    onClick={this.onShowPassword}
                  />
                  <CheckBoxInputLabel
                    htmlFor="showpassword"
                    isDarkTheme={isDarkTheme}
                  >
                    Show Password
                  </CheckBoxInputLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrMsg && <LoginErrorMsg>*{errMsg}</LoginErrorMsg>}
              </LoginFormPage>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
