import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f8fafc')};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormPage = styled.form`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 28px;
  width: 95%;
  max-width: 350px;
  @media screen and (min-width: 992px) {
    max-width: 456px;
    padding: 60px 48px 48px 48px;
  }
`

export const LoginLogo = styled.img`
  align-self: center;
  margin-bottom: 15px;
  width: 100px;
  @media screen and (min-width: 992px) {
    width: 122px;
  }
`
export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`
export const LoginLabel = styled.label`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #475569')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const LoginInput = styled.input`
  height: 34px;
  font-family: 'Roboto';
  padding: 7px;
  border: 1px solid #e2e8f0;
  font-size: 12px;
  border-radius: 5px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #64748b')};
  outline: none;
  margin: 10px 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    height: 40px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const CheckBoxInput = styled.input`
  margin-right: 5px;
  cursor: pointer;
`

export const CheckBoxInputLabel = styled.label`
  font-family: 'Roboto';
  font-style: 'normal';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #0f0f0f')};
`
export const LoginButton = styled.button`
  width: 100%;
  align-self: center;
  background-color: #3b82f6;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  padding: 12px;
  color: #ffffff;
  margin-top: 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LoginErrorMsg = styled.p`
  font-family: 'Roboto';
  font-style: 'normal';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${props => (props.isDarkTheme ? '#ff0000' : '#ff0b37')};
  margin-top: 15px;
  margin-bottom: 5px;
`
