import React from 'react';
import {TouchableOpacityProps} from 'react-native'

import {Container, Title, FilterStyledProps} from './styled'

type Props = TouchableOpacityProps & FilterStyledProps & {
  title: string;
}

export function Filter({title, isActive, ...rest}: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}