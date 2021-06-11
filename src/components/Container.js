
import React from 'react'
import styled, { css } from 'styled-components'
import {
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  Platform
} from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'

const Container = styled.View`
  backgroundColor: ${props => props.bg || 'white'};
  padding: ${props => props.pad || 0};
  ${props => props.center && css`
    justify-content: center;
    alignItems: center;
  `};

  ${props => props.spaceBetween && `justify-content: space-between`};
  ${props => props.endAll && `justify-content: flex-end`};
`

const MyContainer = (props) => {
  const isAndroid = Platform.OS === 'android'

  return (
    <KeyboardAvoidingView
      behavior={isAndroid ? null : 'padding'}
      keyboardVerticalOffset={useHeaderHeight() + StatusBar.currentHeight}

    >
      {props.hasScroll
        ? (
          <ScrollView
            bounces={props.bounces}
            onScroll={props.onScroll}
            scrollEventThrottle={props.scrollEventThrottle}
            keyboardShouldPersistTaps={props.persistTaps && 'always'}
          >
            <Container {...props} />
          </ScrollView>
        ) : (
          <Container {...props} />
        )
      }
    </KeyboardAvoidingView>
  )
}

export default MyContainer
