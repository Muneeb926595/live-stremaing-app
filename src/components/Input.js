import React, { useState, useRef, useReducer, useEffect } from 'react'
import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components'
import { inputStyles } from '../styles'
import { MyText } from 'components'
import { validate } from "helpers/Validator";


const MainContainer = styled.View`
  ${props => (inputStyles(props, css)).container}
`

const StyledInput = styled.TextInput`
  ${props => (inputStyles(props, css)).input}
`


const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    }
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};


const MyInput = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });
  const { value, isValid } = inputState;
  const { id, onInput } = props;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.nativeEvent.text,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };


  const [height, setHeight] = useState(null)
  const { limit, title, length, err, containerWid, focusOnRender, adaptiveHeight } = props
  const innerRef = useRef(null)


  useEffect(() => {
    if (adaptiveHeight) setHeight(adaptiveHeight)
    if (!focusOnRender) return

    setTimeout(() => {
      innerRef.current.focus()
    }, 300)
  }, [])

  const handleContentSize = (e) => {
    const nativeHeight = e.nativeEvent.contentSize.height

    if (!adaptiveHeight) return
    if (nativeHeight < adaptiveHeight) return setHeight(adaptiveHeight)

    setHeight(nativeHeight)
  }
  return (
    <React.Fragment>
      {title && (
        <Text inputHeader textTransform='uppercase'>
          {title}
        </Text>
      )}

      <MainContainer limit={limit} err={!inputState.isValid && inputState.isTouched ? true : false} marg={props.marg} containerWid={containerWid}>


        <StyledInput
          textAlignVertical={props.multiline ? 'top' : 'center'}
          placeholderTextColor={props.placeholderColor ? props.placeholderColor : '#AEB0B2'}
          onChange={changeHandler}
          onBlur={touchHandler}
          ref={props.inputRef || innerRef}
          onContentSizeChange={handleContentSize}
          err={!inputState.isValid && inputState.isTouched ? true : false}
          {...props}
          style={props.adaptiveHeight &&
          {
            height: height
              || props.adaptiveHeight,
            maxHeight: props.maxAdaptiveHeight
              || Dimensions.get('window').height / 3
          }
          }
        />


        {props.limit && (
          <MyText style={{ fontSize: 16, letterSpacing: 0.2 }}>{length}/{limit}</MyText>
        )}
      </MainContainer>
    </React.Fragment>
  )
}
export default MyInput