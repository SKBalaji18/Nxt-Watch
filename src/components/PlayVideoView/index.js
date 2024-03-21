import {formatDistanceToNowStrict} from 'date-fns'
import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos, addSavedVideo} = value
        const textColor = isDarkTheme ? '#64748b' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addSavedVideo(videoDetails)
        }

        const updatedDate = formatDistanceToNowStrict(
          new Date(videoDetails.publishedAt),
        )

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={isDarkTheme ? '#ffffff' : '#231f20'}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {updatedDate} ago
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText color={isLiked ? '#2563eb' : '#64748b'}>
                      Like
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText color={isDisLiked ? '#2563eb' : '#64748b'}>
                      Dislike
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText color={saveIconColor}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine color={isLiked ? '#2563eb' : '#94a3b8'} />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={isDarkTheme ? '#ffffff' : '#231f20'}>
                  {videoDetails.name}
                </ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={isDarkTheme ? '#ffffff' : '#616e7c'}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default PlayVideoView
