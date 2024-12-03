import React from 'react';
import {TouchableOpacityProps} from 'react-native'
import {Container, Icon} from './styled'

type Props = TouchableOpacityProps & {
  
}

export function ButtonIcon({ }: Props) {
  return (
    <Container>
      <Icon name = "home" type='PRIMARY'/>

    </Container>
  )
}