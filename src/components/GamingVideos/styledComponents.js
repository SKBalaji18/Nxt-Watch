import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${props => props.bgColor};
`
export const GamingTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  background-color: ${props => props.bgColor};
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin: 15px 10px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  } ;
`
export const GamingText = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f

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
<<<<<<< HEAD
=======
=======
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
