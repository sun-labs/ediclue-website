import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
import theme from './theme.json'

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
`

function App () {
  return (
    <AppWrapper>
      <MaxWidth maxWidth={1280}>
        <LogoWrapper>
          <img src={logo} />
        </LogoWrapper>
      </MaxWidth>
    </AppWrapper>
  )
}

export default App
