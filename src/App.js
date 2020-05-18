import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
import theme from './theme.json'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './transitions.css'

const AppWrapper = styled.div`
  min-height: 100%;
  background-color: ${theme.backgroundColor};
`
const LogoWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
  @media screen and (max-width: 400px) {
      & img { width: 50%; }
  }
`
const MaxWidth = styled.div`
  max-width: ${props => props.maxWidth || 1024}px;
  position: relative;
`

const SideBar = styled.nav`
  position: absolute;
`

function App () {
  return (
    <AppWrapper>
      <MaxWidth maxWidth={1280}>
        <SideBar>
          <ul>
            <li><a href=''>source code</a></li>
          </ul>
        </SideBar>
        <TransitionGroup appear>
          <CSSTransition
            classNames='boing'
            key='logo'
            timeout={250}
          >
            <LogoWrapper>
              <img src={logo} />
            </LogoWrapper>
          </CSSTransition>
        </TransitionGroup>
      </MaxWidth>
    </AppWrapper>
  )
}

export default App
