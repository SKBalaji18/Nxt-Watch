import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavBar,
  NavLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavLabel,
  ContactUsConatiner,
  ContactIn,
  ContactIcon,
  ContactUsDesc,
  ContachHeading,
  NavSmallContainer,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class NavigationSideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {activeTab, changeTab, isDarkTheme} = value

          const activeTabBgColor = isDarkTheme ? '#475569' : '#cbd5e1'

          const onChangeHomeTab = () => changeTab('Home')
          const onChangeTrendingTab = () => changeTab('Trending')
          const onChangeGamingTab = () => changeTab('Gaming')
          const onChangeSavedTab = () => changeTab('Saved')

          return (
            <NavBar>
              <NavLgContainer isDarkTheme={isDarkTheme}>
                <NavOptions>
                  <NavLink to="/">
                    <NavLinkContainer
                      key="home"
                      onClick={onChangeHomeTab}
                      bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                    >
                      <AiFillHome
                        size={25}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavLabel isDarkTheme={isDarkTheme}>Home</NavLabel>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/trending">
                    <NavLinkContainer
                      key="trending"
                      onClick={onChangeTrendingTab}
                      bgColor={
                        activeTab === 'Trending' ? activeTabBgColor : 'none'
                      }
                    >
                      <HiFire
                        size={25}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavLabel isDarkTheme={isDarkTheme}>Trending</NavLabel>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/gaming">
                    <NavLinkContainer
                      key="game"
                      onClick={onChangeGamingTab}
                      bgColor={
                        activeTab === 'Gaming' ? activeTabBgColor : 'none'
                      }
                    >
                      <SiYoutubegaming
                        size={25}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavLabel isDarkTheme={isDarkTheme}>Gaming</NavLabel>
                    </NavLinkContainer>
                  </NavLink>
                  <NavLink to="/saved-videos">
                    <NavLinkContainer
                      key="saved"
                      onClick={onChangeSavedTab}
                      bgColor={
                        activeTab === 'Saved' ? activeTabBgColor : 'none'
                      }
                    >
                      <CgPlayListAdd
                        size={25}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavLabel isDarkTheme={isDarkTheme}>
                        Saved Videos
                      </NavLabel>
                    </NavLinkContainer>
                  </NavLink>
                </NavOptions>
                <ContactUsConatiner>
                  <ContachHeading isDarkTheme={isDarkTheme}>
                    CONTACT US
                  </ContachHeading>
                  <ContactIn>
                    <ContactIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactIcon
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIn>
                  <ContactUsDesc isDarkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactUsDesc>
                </ContactUsConatiner>
              </NavLgContainer>
              <NavSmallContainer isDarkTheme={isDarkTheme}>
                <NavLink to="/">
                  <NavLinkContainer key="home" onClick={onChangeHomeTab}>
                    <AiFillHome
                      size={25}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    onClick={onChangeTrendingTab}
                  >
                    <HiFire
                      size={25}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer key="game" onClick={onChangeGamingTab}>
                    <SiYoutubegaming
                      size={25}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer key="saved" onClick={onChangeSavedTab}>
                    <CgPlayListAdd
                      size={25}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                  </NavLinkContainer>
                </NavLink>
              </NavSmallContainer>
            </NavBar>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NavigationSideBar
