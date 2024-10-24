import React from "react";
import { Container, Subtitle, Title } from "./styled";

type Props ={
  title: string;
  subtitle: string;
}

export function Highlight({title, subtitle}:Props){
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}