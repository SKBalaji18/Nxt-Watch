import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 230px;
  }
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1.5px solid #000000;
  color: #000000;
  font-weight: 500;
  background: none;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
  align-self: flex-start;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 90%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  color: ${props => props.color};
  font-family: Roboto;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 35px;
  min-height: 90vh;
`
export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  } ;
`
export const FailedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const FailedNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-size: 15px;
`
