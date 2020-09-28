import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../../base/Text'
import Icon from 'react-native-vector-icons/Ionicons'
import { CapitalizeFirstLetter } from '../../../utils/Helpers'

type LocationInfoProps = {
  location: string
  description: string
  temp: number
}

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  padding: 40px 20px;
  align-items: center;
  align-content: center;
`

const Container = styled.View`
  margin-top: 20px;
`

export const LocationInfo = (props: LocationInfoProps) => {
  return (
    <Wrapper>
      <Container>
        <Text size="80px" color="#404040">
          {props.temp}°
        </Text>
      </Container>
      <Icon name="location-outline" color="#404040" size={30} />
      <Text color="#404040">{props.location}</Text>
      <Text size="15px" color="#404040">
        {CapitalizeFirstLetter(props.description)}
      </Text>
    </Wrapper>
  )
}
