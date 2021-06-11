import React from 'react'
import styled, { css } from 'styled-components'
import { buttonStyles } from '../styles'
import { MyText } from 'components'

const StyledButton = styled.TouchableOpacity`
  ${props => buttonStyles(props, css)}
`

const MyButton = (props) => {

  const { onClick, disabled, color, black, text } = props

  return (
    <StyledButton
      onPress={onClick}
      {...props}
    >

      {props.text && (
        <MyText
          color={disabled ? "#00000042" : color || (black ? "#ffffff" : "#000000")}
          size={props.textSize || '14px'}
        >
          {text}
        </MyText>
      )
      }
    </StyledButton >
  )
}

export default MyButton