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

  addSavedVideo = video => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
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
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
