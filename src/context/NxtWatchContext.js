import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  changeTheme: () => {},
  changeTab: () => {},
  addSavedVideo: () => {},
})

export default NxtWatchContext
