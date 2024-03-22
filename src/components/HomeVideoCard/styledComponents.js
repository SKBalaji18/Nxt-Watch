import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeCardVideoLink = styled(Link)`
  text-decoration: none;
`

export const HomeCardContainer = styled.li`
  list-style-type: none;
  width: 100%;
  background: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
  @media screen and (min-width: 568px) and (max-width: 767px) {
    width: 230px;
    margin-left: 15px;
  }
  @media screen and (min-width: 568px) {
    width: 270px;
    margin-right: 20px;
  }
`

export const HomeThumbnail = styled.img`
  width: 100%;
`

export const HomeCardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileLogo = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const HomeContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  paddingt: 8px;
`
export const HomeVideoHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 5px 0px;
  color: ${props => props.color};
`
export const HomeVideoChannel = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 5px 0px;
  color: ${props => props.color};
`
export const HomeVideoDateAndTime = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 5px 0px;
  margin-bottom: 15px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  height: 20px;
  width: 20px
  border-radius: 50px;
  padding: 0px 5px;
`
