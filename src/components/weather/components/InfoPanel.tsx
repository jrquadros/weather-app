import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../../base/Text'
import { WeatherIcon } from './WeatherIcon'
import { ResponseIcons, GetTempStatus } from '../../../utils/Helpers'

type InfoPanelProps = {
  weatherInfo: {
    main: string
    icon: ResponseIcons
    temp: number
  }
}

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 40px 30px;
  margin: 20px 5px;
  border-radius: 20px;
`

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.View`
  display: flex;
`

export const Panel = (props: InfoPanelProps) => {
  return (
    <Wrapper>
      <Row>
        <Container>
          <Text>It's</Text>
          <Text bold={'bold'}>{GetTempStatus(props.weatherInfo.temp)}</Text>
          <Text>outside</Text>
        </Container>
        <WeatherIcon iconPath={props.weatherInfo.icon} />
      </Row>
    </Wrapper>
  )
}
