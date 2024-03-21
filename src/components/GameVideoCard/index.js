import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingVideosAndDate,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <GamingListItem>
              <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingVideosAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingVideosAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default GameVideoCard
