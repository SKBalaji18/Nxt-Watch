import {formatDistanceToNowStrict} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeCardVideoLink,
  HomeCardContainer,
  HomeThumbnail,
  HomeCardBottomContainer,
  ProfileLogo,
  HomeContentSection,
  HomeVideoHeading,
  HomeVideoChannel,
  HomeVideoDateAndTime,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const updatedDate = formatDistanceToNowStrict(new Date(publishedAt))
        return (
          <HomeCardVideoLink to={`/videos/${id}`}>
            <HomeCardContainer>
              <HomeThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <HomeCardBottomContainer>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <HomeContentSection>
                  <HomeVideoHeading color={textColor}>{title}</HomeVideoHeading>
                  <HomeVideoChannel color={textColor}>{name}</HomeVideoChannel>
                  <HomeVideoDateAndTime color={textColor}>
                    {viewCount} Views <Dot> &#8226; </Dot>
                    {updatedDate} ago
                  </HomeVideoDateAndTime>
                </HomeContentSection>
              </HomeCardBottomContainer>
            </HomeCardContainer>
          </HomeCardVideoLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideoCard
