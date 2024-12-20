import React from 'react';
import {TouchableOpacityProps} from 'react-native'
import {Container, Icon, ButtonIconTypeStyledProps} from './styled'
import {MaterialIcons} from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyledProps
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon name = {icon} type={type}/>
    </Container>
  )
}