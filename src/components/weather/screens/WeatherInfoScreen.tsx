import React from 'react'
import styled from 'styled-components/native'
import { Panel } from '../components/InfoPanel'
import { LocationInfo } from '../components/LocationInfo'

const Wrapper = styled.ScrollView`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
`

export const Weatherinfo = () => {
  return (
    <Wrapper>
      <Panel weatherInfo={{ main: 'Cold', icon: '02d', temp: 18 }} />
      <LocationInfo location="Teresina" temp={10} description="scattered clouds" />
    </Wrapper>
  )
}
