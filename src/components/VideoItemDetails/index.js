import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
import FailureView from '../FailureView'
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
import PlayVideoView from '../PlayVideoView'

import NxtWatchContext from '../../context/NxtWatchContext'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
import {
  VideoDetailViewContainer,
  LoaderContainer,
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'
<<<<<<< HEAD
=======
=======
import {VideoDetailViewContainer, LoaderContainer} from './styledComponents'
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
<<<<<<< HEAD
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
=======
<<<<<<< HEAD
    <LoaderContainer data-testid='loader'>
      <Loader type='ThreeDots' color='#0b69ff' height='50' width='50' />
=======
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
    </LoaderContainer>
  )

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        clickSaved={this.clickSaved}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
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
<<<<<<< HEAD
            <FailedImage src={FailureImageUrl} alt="failure view" />
=======
            <FailedImage src={FailureImageUrl} alt='failure view' />
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
            <FailedHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote noteColor={noteColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailedNote>
<<<<<<< HEAD
            <RetryButton type="button" onClick={this.onRetry}>
=======
            <RetryButton type='button' onClick={this.onRetry}>
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </NxtWatchContext.Consumer>
  )
<<<<<<< HEAD
=======
=======
  renderFailureView = () => <FailureView onRetry={this.onRetry} />
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f

  renderVideoDetailView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
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

          return (
            <>
              <Header />
              <NavigationSideBar />
              <VideoDetailViewContainer
<<<<<<< HEAD
                data-testid="videoItemDetails"
=======
<<<<<<< HEAD
                data-testid='videoItemDetails'
=======
                data-testid="videoItemDetails"
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
                bgColor={bgColor}
              >
                {this.renderVideoDetailView()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
