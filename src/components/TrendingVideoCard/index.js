import {formatDistanceToNowStrict} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  const updatedDate = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName
                    color={isDarkTheme ? '#7e858e' : '#94a3b8'}
                  >
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate
                    color={isDarkTheme ? '#7e858e' : '#94a3b8'}
                  >
                    {viewCount} views<TrendingDot> &#8226; </TrendingDot>
                    {updatedDate} ago
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoCard
