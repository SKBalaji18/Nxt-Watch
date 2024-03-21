import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const GamingListItem = styled.li`
  background: none;
  display: flex;
  width: 90%;
  max-height: 500px;
  margin-left: 15px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  } ;
`
export const GamingThumbNailImage = styled.img`
  width: 100%;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 260px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingVideosAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
