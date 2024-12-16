import React from "react";
import { Container } from "./syled";
import {useTheme} from 'styled-components/native'

import {TextInput, TextInputProps} from "react-native"

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef, ...rest}:Props){
  const {COLORS} = useTheme();
  
  return(
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
      ref = {inputRef}
    />   
  )
}