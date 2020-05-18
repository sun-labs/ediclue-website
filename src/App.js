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

const DescriptionWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const Description = styled.span`
  text-align: center;
  font-family: serif;
  font-size: 1.25rem;
  line-height: 200%;
  white-space: pre-wrap;
  max-width: 512px;
  padding: 1rem;
`

const Divider = styled.hr`

  border-style: solid;
  border-color: white;
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
          <DescriptionWrapper style={{ paddingTop: '1rem' }}>
            <Description>Convert EDI to JSON without having to sell your first born.</Description>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <Description>
            EDIFact was developed like a hundred years ago and is still used for infrastructure related communication.
            We made a tool for it and atm it’s collecting dust. No guarantees and not verified, but we had it working for a about a year without any trouble communicating with electricity providers in the nordics.
            </Description>
          </DescriptionWrapper>
          <Divider />
        </TransitionGroup>
      </MaxWidth>
    </AppWrapper>
  )
}

export default App
