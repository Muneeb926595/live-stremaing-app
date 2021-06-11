import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import { StorageHelper } from '../../helpers';
import { socket } from "../../helpers/sockets"
import Col from "../../components/Col"
import Input from "../../components/Input"
import Icon from "../../components/Icon"
import Text from "../../components/Text"
import Row from "../../components/Row"
import Clickable from "../../components/Clickable"
import Button from "../../components/Button"
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../helpers/Validator";
import useForm from "../../hooks/useForm";
import { submitLogin } from "../../store/auth/AuthActions"

const index = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(async () => {
    const userId = await StorageHelper.getItem(StorageHelper.StorageKeys.USER_ID)
    if (userId) {
      console.log("joining ", userId)
      socket.emit("join", userId)
    }
    return () => {
      socket.off("join")
    }
  }, [StorageHelper])

  useEffect(() => {
    const authenticateUser = async () => {
      const userId = await StorageHelper.getItem(StorageHelper.StorageKeys.USER_ID)
      const accessToken = await StorageHelper.getItem(StorageHelper.StorageKeys.Access_Token)

      if (userId && accessToken) {
        navigation.navigate("LiveStreams")
      } else {
        navigation.navigate("Login")
      }
    }
    authenticateUser()
  }, [StorageHelper, navigation])

  const handleLogin = () => {
    dispatch(
      submitLogin(
        {
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        },
        navigation
      )
    );
  };

  return (
    <Col centerAll bg="#080707" >
      <Icon type="logo" size={wp(60)} marg={`${wp(4)}px 0 0 0`} />
      <Text size={`${RFValue(20)}px`} color="#ffffff" weight="700" >Welcome back to Streamlia</Text>

      <Col noFlex wid="80%" marg={`${wp(20)}px 0 0 0`}>
        <Input
          value={email}
          id="email"
          color="#ffffff"
          fontSize={`${RFValue(16)}px`}
          ht={`${wp(16)}px`}
          marg={`0 0 ${wp(4)}px 0`}
          onInput={inputHandler}
          onChangeText={val => setEmail(val)}
          validators={[VALIDATOR_EMAIL()]}
          placeholder='Email*' />
        <Input
          id="password"
          color="#ffffff"
          value={password}
          fontSize={`${RFValue(16)}px`}
          ht={`${wp(16)}px`}
          marg={`0 0 ${wp(4)}px 0`}
          onInput={inputHandler}
          secureTextEntry
          onChangeText={val => setPassword(val)}
          validators={[VALIDATOR_MINLENGTH(6)]}
          placeholder='Password*'
        />
      </Col>

      <Row noFlex>
        <Text size={`${RFValue(13)}px`} color="#ffffff">Don't have an account ?</Text>
        <Clickable marg={`0 0 0 ${wp(2)}px`} onClick={() => navigation.navigate("Signup")}>
          <Text size={`${RFValue(14)}px`} color="#0b67ff" weigh="600" >Signup</Text>
        </Clickable>
      </Row>

      <Button
        border="none"
        hasRadius="6px"
        bgColor="#0b67ff"
        text="Sign In"
        wid="80%"
        color="#ffffff"
        size="12px"
        weight="bold"
        disabled={!formState.isValid}
        marg={`${wp(1)}px 0 ${wp(16)}px 0`}
        onClick={handleLogin}
      />
    </Col>
  )
}

export default index
