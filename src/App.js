import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
import theme from './theme.json'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ediJson from './assets/edi.json'

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
      & img { width: 75%; }
  }
`

const DescriptionWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const MonoText = styled.span`
  white-space: pre-wrap;
  padding: 1rem 0 2rem 0;
  font-size: 1.75rem;
  font-family: 'Fira Code', 'Fira', monospace;
  word-break: break-all;
`

const Description = styled.span`
  text-align: center;
  font-family: 'Enriqueta', serif;
  font-size: 1.25rem;
  line-height: 200%;
  white-space: pre-wrap;
  max-width: 512px;
  padding: 1rem;
`

const FatTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  font-family: 'HelveticaNeue-CondensedBold', 'Helvetica Neue', sans-serif;
`

const Divider = styled.hr`

  border-style: solid;
  border-color: white;
`

const MaxWidth = styled.div`
  max-width: ${props => props.maxWidth || 1024}px;
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
`

const Footer = styled.footer`
  text-align: center;
  margin: 2rem 0 5rem 0;
`

const WithLove = styled.span`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: monospace;
  color: ${theme.backgroundColor};
  background-color: blue;
  box-shadow: 4px 4px 0px red;
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
          <MaxWidth maxWidth={768}>
            <FatTitle>CONVERT</FatTitle>
            <MonoText>UNH+66025+DESADV:D:96A:UN:EAN005'</MonoText>
            <FatTitle style={{ paddingTop: '1rem' }}>INTO</FatTitle>
            <MonoText>{JSON.stringify(ediJson, null, 2)}</MonoText>
          </MaxWidth>
          <Divider />
          <MaxWidth maxWidth={768}>
            <ul>
              <li><MonoText>generates APERAK from EDI messages</MonoText></li>
              <li><MonoText>Mail (SMTP & IMAP communication)</MonoText></li>
              <li><MonoText>Developed for EDIEL</MonoText></li>
              <li><MonoText>python 3</MonoText></li>
            </ul>
          </MaxWidth>
          <Footer>
            <WithLove>{'With <3 From Uppsala'}</WithLove>
          </Footer>
        </TransitionGroup>
      </MaxWidth>
    </AppWrapper>
  )
}

export default App
