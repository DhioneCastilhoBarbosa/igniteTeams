import React from "react";
import { Container } from "./syled";
import {useTheme} from 'styled-components/native'

import {TextInputProps} from "react-native"

export function Input({...rest}: TextInputProps){
  const {COLORS} = useTheme();
  
  return(
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />   
  )
}