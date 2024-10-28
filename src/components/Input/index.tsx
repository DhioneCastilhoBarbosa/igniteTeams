import React from "react";
import { Container } from "./syled";

import {TextInputProps} from "react-native"

export function Input({...rest}: TextInputProps){
  return(
    <Container{...rest}/>   
  )
}