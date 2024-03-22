import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
<<<<<<< HEAD

import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'
=======
<<<<<<< HEAD
// import FailureView from '../FailureView'
=======
import FailureView from '../FailureView'
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
import HomeVideos from '../HomeVideos'
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f

import {
  HomeContainer,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BannerLeftPart,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  LoaderContainer,
<<<<<<< HEAD
  /*FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,*/
=======
<<<<<<< HEAD
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
=======
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
<<<<<<< HEAD
    bannerDisplay: true,
=======
<<<<<<< HEAD
    bannerDisplay: true,
=======
    bannerDisplay: 'flex',
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
  }

  componentDidMount() {
    this.getVideos()
  }

  onSearchVideo = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResult = () => {
    this.getVideos()
  }

  onEnterKey = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onCloseBanner = () => {
<<<<<<< HEAD
    this.setState({bannerDisplay: false})
=======
<<<<<<< HEAD
    this.setState({bannerDisplay: false})
=======
    this.setState({bannerDisplay: 'none'})
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderVideosView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

<<<<<<< HEAD
  renderFailureView = () => <FailureView onRetry={this.onRetry} />
=======
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
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f

  renderHomeVideos = () => {
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
    const {searchInput, bannerDisplay} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f

          return (
            <>
              <Header />
              <NavigationSideBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
                {bannerDisplay && (
                  <BannerContainer data-testid="banner">
                    <BannerLeftPart>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerLeftPart>
                    <BannerRightPart>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={25} />
                      </BannerCloseButton>
                    </BannerRightPart>
                  </BannerContainer>
                )}
<<<<<<< HEAD
=======
=======
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText display={display}>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.onCloseBanner}
                    >
                      <AiOutlineClose size={25} />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onKeyDown={this.onEnterKey}
                    onChange={this.onSearchVideo}
                    color={textColor}
                  />
                  <SearchIconContainer
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearchResult}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
