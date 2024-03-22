import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import NxtWatchContext from './context/NxtWatchContext'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    activeTab: 'Home',
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
  addSavedVideo = videoDetails => {
    this.setState(prev => ({
      savedVideos: [...prev.savedVideos, videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const updatedList = savedVideos.filter(each => each.id !== videoDetails.id)
    this.setState({savedVideos: updatedList})
  }

  updateSave = videoDetails => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (index === -1) {
      this.addSavedVideo(videoDetails)
    } else {
      this.deleteVideosFromSavedVideos(videoDetails)
<<<<<<< HEAD
=======
=======
  addSavedVideo = video => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
    }
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          changeTheme: this.changeTheme,
          changeTab: this.changeTab,
          addSavedVideo: this.addSavedVideo,
<<<<<<< HEAD
          deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
          updateSave: this.updateSave,
=======
<<<<<<< HEAD
          deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
          updateSave: this.updateSave,
=======
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/not-found" component={NotFound} />
=======
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
<<<<<<< HEAD
          <Route exact path="/not-found" component={NotFound} />
          <Route path="/not-found" component={NotFound} />
=======
          <Route path="/not-found" component={NotFound} />
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
>>>>>>> 1da8f561cb4467091f9a605a98db52c3c997826f
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
