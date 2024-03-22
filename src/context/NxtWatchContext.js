import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  changeTheme: () => {},
  changeTab: () => {},
  addSavedVideo: () => {},
<<<<<<< HEAD
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
=======
>>>>>>> ca4c6f3f535ea3edb698a15d38b2d3943b852a76
})

export default NxtWatchContext
