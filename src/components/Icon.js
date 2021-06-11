import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'

import { icons } from 'assets'

const IconContainer = styled.View`
  ${(props) => props.marg && `margin: ${props.marg};`}
  ${(props) => props.pad && `padding: ${props.pad};`}
`

const Icon = (props) => (
  <IconContainer {...props}>
    <Image
      source={icons[props.type]}
      style={{
        width: props.width ? props.width : props.size || 25,
        height: props.height ? props.height : props.size || 25,
        alignSelf: 'center',
        borderRadius: props.rounded ? 100 : props.borderRadius || 0,
      }}
    />
  </IconContainer>
)

export default Icon
