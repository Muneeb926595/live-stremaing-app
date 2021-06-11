import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, } from 'react-native-responsive-screen';

import Col from "../../components/Col"
import Input from "../../components/Input"
import Icon from "../../components/Icon"
import Text from "../../components/Text"
import Row from "../../components/Row"
import Clickable from "../../components/Clickable"
import Button from "../../components/Button"
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_NO_SPACE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../helpers/Validator";
import useForm from "../../hooks/useForm";
import { submitRegister } from "../../store/auth/AuthActions"

const index = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
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

  const handleSignup = () => {
    dispatch(
      submitRegister(formState.inputs.username.value, formState.inputs.email.value, formState.inputs.password.value, navigation)
    );
  };

  return (
    <Col centerAll bg="#080707" centerAll>
      <Icon type="logo" size={wp(60)} marg={`${wp(10)}px 0 0 0`} />
      <Text size={`${RFValue(20)}px`} color="#ffffff" weight="700" >Welcome to Streamlia</Text>

      <Col noFlex wid="80%" marg={`${wp(26)}px 0 0 0`}>
        <Input
          value={username}
          id="username"
          color="#ffffff"
          fontSize={`${RFValue(16)}px`}
          ht={`${wp(16)}px`}
          marg={`0 0 ${wp(4)}px 0`}
          onInput={inputHandler}
          onChangeText={val => setUsername(val)}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_NO_SPACE(), VALIDATOR_MINLENGTH(3)]}
          placeholder='Username*' />
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

      <Row>
        <Text size={`${RFValue(13)}px`} color="#ffffff">Already have an account ?</Text>
        <Clickable marg={`0 0 0 ${wp(2)}px`} onClick={() => navigation.navigate("Login")} >
          <Text size={`${RFValue(14)}px`} color="#0b67ff" weigh="600" >Signin</Text>
        </Clickable>
      </Row>

      <Button
        border="none"
        hasRadius="6px"
        bgColor="#0b67ff"
        text="Sign Up"
        wid="80%"
        color="#ffffff"
        size="12px"
        weight="bold"
        marg={`${wp(2)}px 0 ${wp(20)}px 0`}
        disabled={!formState.isValid}
        onClick={handleSignup}
      />
    </Col>
  )
}

export default index
