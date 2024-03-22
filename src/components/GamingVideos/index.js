import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
<<<<<<< HEAD
=======
import FailureView from '../FailureView'
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
import GameVideoCard from '../GameVideoCard'

import {
  GamingContainer,
  GamingTitleIconContainer,
  GamingVideoTitle,
  GamingVideoList,
  GamingText,
  LoaderContainer,
<<<<<<< HEAD
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
=======
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GameVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

<<<<<<< HEAD
  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const FailureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedImage src={FailureImageUrl} alt="failure view" />
            <FailedHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote noteColor={noteColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailedNote>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </NxtWatchContext.Consumer>
  )
=======
  renderFailureView = () => <FailureView onRetry={this.onRetry} />
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Header />
              <NavigationSideBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle bgColor={isDarkTheme ? '#212121' : '#ebebeb'}>
                  <GamingTitleIconContainer
                    bgColor={isDarkTheme ? '#000000' : '#d7dfe9'}
                  >
                    <SiYoutubegaming size={30} color="#ff0000" />
                  </GamingTitleIconContainer>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderGamingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingVideos
