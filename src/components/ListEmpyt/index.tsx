import React from "react"
import { Container, Message } from "./styled"

type Props = {
  message : string
}

export function ListEmpyt({message}: Props){
  return(
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}