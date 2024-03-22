import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 92vh;
  width: 250px;
  position: fixed;
  top: 60px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    padding: 10px;
  }
`
export const NavLabel = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`
export const ContactUsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContachHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  font-weight: 600;
`

export const ContactIn = styled.div`
  display: flex;
  align-items: center;
`
export const ContactIcon = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 15px;
`
export const ContactUsDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`
export const NavSmallContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-lef: 0px;
  padding: 15px;
  position: fixed;
  bottom: 0px;
  margin-bottom: 0px;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
